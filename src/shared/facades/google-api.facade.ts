import { singleton } from 'tsyringe';
import lodash from 'lodash';
// eslint-disable-next-line camelcase
import { google, sheets_v4 } from 'googleapis';
import {
  Credentials,
  GenerateAuthUrlOpts,
  OAuth2Client,
} from 'google-auth-library';
import { UserTokenInfoType } from '@modules/googleSheets/infra/local/repositories/IGoogleUserRepository';
import ContainerManagerHelper from '@helpers/container-manager.helper';
import { arrayArrayToObjArrayHead } from '@helpers/obj-manipulator.help';
import ConsoleLog from '@libs/ConsoleLog';
// eslint-disable-next-line camelcase
import Schema$BatchGetValuesByDataFilterRequest = sheets_v4.Schema$BatchGetValuesByDataFilterRequest;
// eslint-disable-next-line camelcase
import Schema$BatchUpdateValuesResponse = sheets_v4.Schema$BatchUpdateValuesResponse;
// eslint-disable-next-line camelcase
import Schema$BatchUpdateValuesRequest = sheets_v4.Schema$BatchUpdateValuesRequest;
// eslint-disable-next-line camelcase
import Schema$ValueRange = sheets_v4.Schema$ValueRange;

/** @author Eric Ambiel */
export type GoogleClientCredentialType = {
  web: {
    client_id: string;
    project_id: string;
    auth_uri: string;
    token_uri: string;
    auth_provider_x509_cert_url: string;
    client_secret: string;
    redirect_uris: string[];
    javascript_origins: string[];
  };
};

/** @author Eric Ambiel */
// eslint-disable-next-line no-shadow
export enum GDriveMINEEnum {
  audio = 'application/vnd.google-apps.audio',
  /** Google Docs */
  document = 'application/vnd.google-apps.document',
  /** 3rd party shortcut */
  driveSdk = 'application/vnd.google-apps.drive-sdk',
  drawing = 'application/vnd.google-apps.drawing', // Google Drawing
  file = 'application/vnd.google-apps.file', // Google Drive file
  folder = 'application/vnd.google-apps.folder', // Google Drive folder
  form = 'application/vnd.google-apps.form', // Google Forms
  fusiontable = 'application/vnd.google-apps.fusiontable', // Google Fusion Tables
  jam = 'application/vnd.google-apps.jam', // Google Jamboard
  map = 'application/vnd.google-apps.map', // Google My Maps
  photo = 'application/vnd.google-apps.photo',
  presentation = 'application/vnd.google-apps.presentation', // Google Slides
  script = 'application/vnd.google-apps.script', // Google Apps Scripts
  shortcut = 'application/vnd.google-apps.shortcut', // Shortcut
  site = 'application/vnd.google-apps.site', // Google Sites
  /** Google Sheets */
  spreadsheet = 'application/vnd.google-apps.spreadsheet',
  video = 'application/vnd.google-apps.video',
  unknown = 'application/vnd.google-apps.unknown',
}

/** @author Eric Ambiel */
type FindWorkbookOption = {
  /** MIME type file */
  mimeType: GDriveMINEEnum | string;
  /** Name of file to find in */
  name?: string;
  /** Get all metadata values from files */
  allMetadata?: true;
};

/** @author Eric Ambiel */
export type GetWorkbookValuesOption = {
  /**
   *  Can get it from you Google sheet URL
   *  @example 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
   */
  spreadsheetId: string;
  /**
   *  Range of columns and rows
   *  @example
   *  'Class Data!A2:E'
   */
  range: string;
  // /**
  //  * Array of Array values, direct from Google without treat to Array of Obj
  //  */
  // arrayArray?: true;
};

/** @author Eric Ambiel */
export type GetWorkbookValuesBatchOption = {
  /**
   *  Can get it from you google sheet URL
   *  @example 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
   */
  spreadsheetId: string;
  /**
   *  Range of columns and rows
   *  @example
   *  'Class Data!A2:E'
   */
  ranges: string[];
};

/** @author Eric Ambiel */
export type UpdateWorkbookValuesBatchOption = {
  /**
   *  Can get it from you Google sheet URL
   *  @example 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
   */
  spreadsheetId: string;

  valuesRange: {
    range: Schema$ValueRange['range'];
    values: Schema$ValueRange['values'];
  }[];
};

/** @author Eric Ambiel */
// eslint-disable-next-line no-shadow
export enum MinimumScopesEnum {
  profile = 'https://www.googleapis.com/auth/userinfo.profile', // Get the same information from profile, like user_id
  spreadsheets = 'https://www.googleapis.com/auth/spreadsheets',
  // 'https://www.googleapis.com/auth/spreadsheets.readonly', // Needed to access spreadsheet
  metadata = 'https://www.googleapis.com/auth/drive.metadata.readonly', // Get Drive file name, used to find Spreadsheet
}

/** @author Eric Ambiel */
type GetAuthUrlOption = {
  /** @type {GenerateAuthUrlOpts.scope} */
  scopes: GenerateAuthUrlOpts['scope'] | MinimumScopesEnum[];
  /** Prompt permission even if had it already, useful to get “refresh_token” again. */
  askPermission?: true;
};

/** @author Eric Ambiel */
@singleton()
export default class GoogleApiFacade extends ContainerManagerHelper {
  constructor() {
    super();
  }

  /**
   * Create an OAuth2 client with the given credentials. Use clientId
   * to locate instance in tsyringe
   * P.S. if given only client credentials needs set token before.
   * @param serviceCredentials The authorization client credentials.
   * @author Eric Ambiel
   */
  oAuth2ClientFactor(serviceCredentials: GoogleClientCredentialType): void {
    const {
      client_secret: clientSecret,
      client_id: clientId,
      redirect_uris: redirectURIs,
    } = serviceCredentials.web;
    const oAuth2Client = new OAuth2Client({
      clientId,
      clientSecret,
      redirectUri: redirectURIs[0],
      forceRefreshOnFailure: true,
      eagerRefreshThresholdMillis: 3300000, // Refresh user token every 55 minutes
    });

    super.container.registerInstance<OAuth2Client>(clientId, oAuth2Client);

    // return oAuth2Client;
  }

  /**
   * Get OAuth2 client instance created with oAuth2ClientFactor.
   * @param clientId The client ID to get instance.
   */
  oAuth2ClientGetInstance(clientId: string): OAuth2Client {
    try {
      return super.getInstance<OAuth2Client>(clientId);
    } catch (e) {
      throw ConsoleLog.print(
        `Google Client instance error: ${(<Error>e).message}`,
        'error',
        'GoogleAPIFacade',
      );
    }
  }

  getAuthUrl(oAuth2Client: OAuth2Client, options: GetAuthUrlOption): string {
    return oAuth2Client.generateAuthUrl({
      scope: options.scopes,
      prompt: options.askPermission ? 'consent' : undefined, // 'consent' prompt permissions and get refresh_token again,
      access_type: 'offline',
      include_granted_scopes: true, // Enable incremental authorization. Recommended as the best practice.
    });
  }

  /**
   * Get user token given client
   * @param oAuth2Client The OAuth2 client to get token for.
   * @param code Authorized code for get token.
   */
  async getNewToken(
    oAuth2Client: OAuth2Client,
    code: string,
  ): Promise<Credentials> {
    // Generate new token
    return new Promise<Credentials>((resolve, reject) => {
      oAuth2Client.getToken(code, async (err, token) => {
        if (err)
          return reject(
            ConsoleLog.print(
              {
                message: `Error while trying to retrieve access token: ${err.message}`,
                stack: err.stack,
              },
              'error',
              'GOOGLE_API_FACADE',
            ),
          );

        if (token) return resolve(token);

        return reject(
          ConsoleLog.print(
            `Token is null or undefined`,
            'error',
            'GOOGLE_API_FACADE',
          ),
        );
      });
    });
  }

  /**
   * Get more information given a client authenticated with user token
   * @param oAuth2Client
   * @param accessToken
   */
  getTokenInformation(
    oAuth2Client: OAuth2Client,
    accessToken: string,
  ): Promise<UserTokenInfoType['user_information']> {
    return <Promise<UserTokenInfoType['user_information']>>(
      oAuth2Client.getTokenInfo(accessToken)
    );
  }

  /**
   * Get values from a worksheet:
   * @param oAuth2Client The authenticated Google OAuth client.
   * @param options
   */
  getWorksheetArrayArray(
    oAuth2Client: OAuth2Client,
    options: GetWorkbookValuesOption,
  ) {
    const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });

    return new Promise<Schema$ValueRange>((resolve, reject) => {
      sheets.spreadsheets.values.get(
        {
          // majorDimension: 'ROWS', // default
          spreadsheetId: options.spreadsheetId,
          range: options.range,
        },
        (err, res) => {
          // TODO: change normal error by ConsoleLog error
          if (err) reject(new Error(`The API returned an error: ${err}`));
          if (res?.data.values) resolve(res.data);
          reject(new Error('No data found.'));
        },
      );
    });
  }

  async getWorksheetArrayArrayBatch(
    oAuth2Client: OAuth2Client,
    options: GetWorkbookValuesBatchOption,
  ) {
    const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
    const { ranges, spreadsheetId } = options;
    const requestBody = (
      a1Ranges: string[],
    ): Schema$BatchGetValuesByDataFilterRequest => {
      return {
        dateTimeRenderOption: 'FORMATTED_STRING',
        dataFilters: a1Ranges.map(range => {
          return {
            a1Range: range,
          };
        }),
      };
    };

    const batchValues = await sheets.spreadsheets.values
      .batchGetByDataFilter({
        spreadsheetId,
        fields: 'valueRanges(valueRange)', // https://developers.google.com/tasks/performance#fields-syntax
        requestBody: requestBody(ranges),
      })
      .then(res => res.data);

    if (!batchValues.valueRanges)
      throw new Error('No value found for given range!');

    return lodash.compact(
      batchValues.valueRanges.map(batchValue => batchValue.valueRange),
    );

    // const indexedValues = batchValues.map(batchValue => {
    //   if (!batchValue?.range || !batchValue?.values) return undefined;
    //
    //   const firstRowId = Number(batchValue.range.split(':')[0].match(/\d+$/));
    //
    //   return batchValue.values.map((value, idx) => {
    //     return { rowId: firstRowId + idx, ...value };
    //   });
    // });
    //
    // return indexedValues;
  }

  /**
   * Transform arrayArray worksheet
   * on typed ArrayObject array
   * @param oAuth2Client
   * @param options
   */
  async getWorksheetValuesArrayObj<T>(
    oAuth2Client: OAuth2Client,
    options: GetWorkbookValuesOption,
  ) {
    const worksheet = await this.getWorksheetArrayArray(oAuth2Client, options);

    const indexedWorksheet = this.indexValuesWithRowId(worksheet);

    // TODO: Verify with celebrate if given generic type is correct transformed
    return arrayArrayToObjArrayHead<T>(indexedWorksheet, {
      undefinedTo: '',
    });
  }

  updateWorksheet(
    oAuth2Client: OAuth2Client,
    options: UpdateWorkbookValuesBatchOption,
  ): Promise<Schema$BatchUpdateValuesResponse> {
    const { valuesRange, spreadsheetId } = options;
    const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });

    const requestBody = (
      batch: Schema$ValueRange[],
    ): Schema$BatchUpdateValuesRequest => {
      return {
        data: batch.map(range => {
          return { ...range, majorDimension: 'ROWS' };
        }),
        valueInputOption: 'USER_ENTERED',
        // includeValuesInResponse: true,
      };
    };

    return sheets.spreadsheets.values
      .batchUpdate({
        spreadsheetId,
        requestBody: requestBody(valuesRange),
      })
      .then(res => {
        // TODO: Em controller passar dados que seram atualizados (Usar rowID implementado)
        return res.data;
      });
  }

  /**
   * Transform arrayArray worksheet
   * on a typed ArrayObject array
   * @param oAuth2Client
   * @param options
   */
  async getWorksheetValuesArrayObjBatch<T>(
    oAuth2Client: OAuth2Client,
    options: GetWorkbookValuesBatchOption,
  ) {
    const worksheetBatch = await this.getWorksheetArrayArrayBatch(
      oAuth2Client,
      options,
    );

    return worksheetBatch.map(worksheet => {
      const indexedWorksheet = this.indexValuesWithRowId(worksheet);

      return arrayArrayToObjArrayHead<T>(indexedWorksheet, {
        undefinedTo: '',
      });
    });
  }

  /**
   * Search file in drive location
   */
  async findFilesDrive(
    oAuth2Client: OAuth2Client,
    options?: FindWorkbookOption,
  ) {
    const service = google.drive({ version: 'v3', auth: oAuth2Client });
    let filter;
    let fields;

    if (options) {
      const { mimeType, name } = options;

      filter = `${mimeType ? `mimeType:'${mimeType}'` : ''}${
        name ? ` AND name:'${name}'` : ''
      }`;

      fields = options.allMetadata ? '*' : 'nextPageToken, files(id, name)';
    }

    const res = await service.files.list({
      q: filter,
      fields,
      spaces: 'drive',
    });

    if (!res.data.files)
      throw new Error("There aren't files with search options");

    // res.data.files.forEach(file => console.log('Found file:', file));

    return res.data.files;
  }

  // TODO: update same row in sheet

  private indexValuesWithRowId(batchValues: Schema$ValueRange) {
    // return batchValues.map(batchValue => {
    if (!batchValues?.range || !batchValues?.values)
      throw Error(
        `“range” or “values” were not provided: ${batchValues.range}`,
      );

    if (batchValues.majorDimension !== 'ROWS')
      throw Error(
        `majorDimension option need to be “ROWS” for range: ${batchValues.range}`,
      );

    const firstRowId = Number(batchValues.range.split(':')[0].match(/\d+$/));

    return batchValues.values.map((value, idx) => {
      return [idx === 0 ? 'rowId' : firstRowId + idx, ...value];
    });
    // });
  }

  // TODO: Use google.drive.watch to subscribe sheet, waiting for changes
}
