import 'reflect-metadata';
import { container } from 'tsyringe';
import { Credentials, OAuth2Client } from 'google-auth-library';
import GoogleApiFacade, {
  GDriveMINEEnum,
} from '@shared/facades/google-api.facade';
import { UserTokenInfoType } from '@modules/googleSheets/infra/local/repositories/IGoogleUserRepository';
import GoogleUserInformationModel from '@modules/googleSheets/infra/local/models/GoogleUserInformationModel';
import CLIENT_SECRET from '../../misc/clients/client_secret_331108598412-fmcfkud7cm6hv4qvjc21g37ormjob0qu.apps.googleusercontent.com.json';
import userToken from '../../misc/tokens/108866897033893388302.token.json';

describe('Integration Tests — GoogleAPIFacade', () => {
  let googleServiceFacade: GoogleApiFacade;
  let oAuth2Client: OAuth2Client;
  let newTokenInfoUser: UserTokenInfoType;

  // TODO: Create schema and use Joy to validate exactly type values(Useful to be used on celebrate too)
  const userTokenInfoSchema: UserTokenInfoType = {
    refresh_token: expect.any(String),
    scope: expect.any(String),
    token_type: 'Bearer',
    id_token: expect.any(String),
    expiry_date: expect.any(Number),
    user_information: {
      sub: expect.any(String),
    },
  };

  beforeAll(() => {
    googleServiceFacade = container.resolve(GoogleApiFacade);
    googleServiceFacade.oAuth2ClientFactor(CLIENT_SECRET);
    oAuth2Client = googleServiceFacade.oAuth2ClientGetInstance(
      CLIENT_SECRET.web.client_id,
    );
  });

  beforeEach(() => {
    oAuth2Client.setCredentials({ refresh_token: userToken.refresh_token });
  });

  it('It should be possible to create an OAuth2Client', async () => {
    expect(oAuth2Client).toBeInstanceOf(OAuth2Client);
  });

  it('It should be possible to get a new token using getTokenInformation.', async () => {
    /** Get this code by running AuthorizeGoogleUserService.spec */
    const validationTokenCode =
      '4/0ARtbsJo_ORBNlNdkVpjoLTpsfo3i2YiKN3QYnzZdpPzwVaMnMny065UwiLLxLLSu6USmHg';

    const newToken: Credentials = await googleServiceFacade.getNewToken(
      oAuth2Client,
      validationTokenCode,
    );

    const tokenInfo: GoogleUserInformationModel =
      await googleServiceFacade.getTokenInformation(
        oAuth2Client,
        newToken.access_token ?? '',
      );

    newTokenInfoUser = {
      ...newToken,
      user_information: tokenInfo,
    };

    expect(newTokenInfoUser).toMatchObject<UserTokenInfoType>(
      userTokenInfoSchema,
    );
  });

  it('It should be possible to list specifics files by criteria', async () => {
    const files = await googleServiceFacade.findFilesDrive(oAuth2Client, {
      mimeType: GDriveMINEEnum.spreadsheet,
      name: 'Apontamento Horas',
    });

    expect(files).toContainEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
      }),
    );
  });

  it('It should be possible to get an “Array of Array” batch spreadsheets.', async () => {
    const a = await googleServiceFacade.getWorksheetValuesArrayObjBatch(
      oAuth2Client,
      {
        spreadsheetId: '1uYLY1xtGQRqPeaUMzzmuVM5vb_fYP8qwDjiS1rb0EjE',
        ranges: ['Horas!A2:H', 'Horas!F2:H3'],
      },
    );

    // const a = await googleServiceFacade.getWorksheetArrayArray(oAuth2Client, {
    //   range: 'Horas!A2:H',
    //   spreadsheetId: '1uYLY1xtGQRqPeaUMzzmuVM5vb_fYP8qwDjiS1rb0EjE',
    // });

    console.log(a);
  });

  it('It should be possible to update the spreadsheet', async () => {
    const res = await googleServiceFacade.updateWorksheet(oAuth2Client, {
      spreadsheetId: '1uYLY1xtGQRqPeaUMzzmuVM5vb_fYP8qwDjiS1rb0EjE',
      valuesRange: [
        {
          range: 'Horas!A344:H356',
          values: [
            [
              '',
              '',
              'COMPANY',
              '1000377',
              '23/03/23 14:01',
              '23/03/23 16:45',
              '02:44',
              'Something made by me here',
            ],
          ],
        },
      ],
    });

    expect(res.totalUpdatedRows).equal(1);
  });
});
