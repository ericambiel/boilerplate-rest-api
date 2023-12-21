import { inject, injectable } from 'tsyringe';
import {
  extractPayloadFromJWT,
  JWTPayloadClaims,
} from '@shared/helpers/small.helper';
import FluigAPIHelper, {
  AuthHeaders,
} from '@modules/my-module-example/helpers/FluigAPIHelper';
import ConsoleLog from '@libs/ConsoleLog';

export type JWTFluigPayload = {
  role: string;
  tenant: number;
  userTenantId: number;
  userType: number;
  userUUID: string;
  tenantUUID: string;
  lastUpdateDate: number;
  userTimeZone: string;
};

export type FluigCredentialsType = {
  jWTPayload: JWTFluigPayload & JWTPayloadClaims;
  headers: AuthHeaders;
};

@injectable()
export default class ExampleService {
  constructor(
    @inject(FluigAPIHelper)
    private fluigAPIHelper: FluigAPIHelper,
  ) {}

  async execute(
    username: string,
    password: string,
  ): Promise<FluigCredentialsType> {
    try {
      const headers = await this.fluigAPIHelper.getUserCredentials(
        username,
        password,
      );

      const jWTPayload = extractPayloadFromJWT<JWTFluigPayload>(
        headers.Authorization,
      );

      return {
        jWTPayload,
        headers,
      };
    } catch (err) {
      throw ConsoleLog.print(<Error>err, 'error', 'FLUIGMODULE');
    }
  }
}
