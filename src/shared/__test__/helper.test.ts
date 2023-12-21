import { container } from 'tsyringe';
import AxiosFacade from '@shared/facades/axios.facade';
import { IExampleRepository } from '@modules/my-module-example/infra/local/repositories/i-example.repository';
import ExampleRepository from '@modules/my-module-example/infra/local/repositories/example.repository';
import ExampleService, {
  FluigCredentialsType,
} from '@modules/my-module-example/services/example.service';
import { Axios } from 'axios';
import {
  FluigUserModel,
  IFluigUserModel,
} from '@modules/my-module-example/infra/local/models/FluigUserModel';
import { plainToInstance } from 'class-transformer';
import RegisterUserService from '@modules/my-module-example/services/RegisterUserService';
import GetUserInformationService from '@modules/my-module-example/services/GetUserInformationService';
import GoogleApiFacade, {
  GoogleClientCredentialType,
} from '@shared/facades/google-api.facade';

import credentials from '../../misc/clients/client_secret_331108598412-fmcfkud7cm6hv4qvjc21g37ormjob0qu.apps.googleusercontent.com.json';
import userToken from '../../misc/tokens/108866897033893388302.token.json';

/**
 * Usefull to format requests and requisitions
 * @param axios
 */
export function formatReqResAxiosTester(axios: Axios) {
  axios.interceptors.request.use(req => {
    const headers = {
      // @ts-ignore
      ...req.headers.common,
      // @ts-ignore
      ...req.headers[req.method],
      ...req.headers,
    };

    ['common', 'get', 'post', 'head', 'put', 'patch', 'delete'].forEach(
      header => {
        delete headers[header];
      },
    );

    const printable = `${new Date()} | Request: ${req.method?.toUpperCase()} | ${
      req.url
    }\n-- HEADERS --\n${JSON.stringify(
      headers,
      null,
      2,
    )}\n-- DATA --\n${JSON.stringify(req.data, null, 2)}`;

    console.log(printable);

    return req;
  });

  axios.interceptors.response.use(res => {
    const printable = `${new Date()} | Response: ${
      res.status
    }\n--DATA--\n${JSON.stringify(res.data, null, 2)}`;

    console.log(printable);

    return res;
  });
}

/**
 * Authorize .env test user on Axios instance and register then
 * in a repository.
 */
export async function authorizeUserAxiosFluigTester(isAxiosDebug?: boolean) {
  // Autorize Fluig User
  const { headers, jWTPayload }: FluigCredentialsType = await container
    .resolve(ExampleService)
    .execute(
      process.env.TEST_FLUIG_USERNAME ?? '',
      process.env.TEST_FLUIG_PASSWORD ?? '',
    );

  // Convert Bear JTW to a user model
  const fluigUser: IFluigUserModel = plainToInstance(
    FluigUserModel,
    jWTPayload,
  );

  // Register User service
  container.resolve(RegisterUserService).execute(fluigUser, headers);

  // Get more information about User
  fluigUser.userInfo = await container
    .resolve(GetUserInformationService)
    .execute(fluigUser.userUUID, fluigUser.sub);

  // Get repository from users registered
  const repository =
    container.resolve<IExampleRepository>(ExampleRepository);

  // List all users Registered
  const registeredUsers = repository.list();

  // Get Axios instance with authorized fluig user
  const axiosAuthorizedClient = container
    .resolve(AxiosFacade)
    .axiosGetInstance(registeredUsers[0].userUUID);

  if (isAxiosDebug) formatReqResAxiosTester(axiosAuthorizedClient);

  return axiosAuthorizedClient;
}

export function authorizeGoogleUserClientTester() {
  container.register<GoogleClientCredentialType[]>(
    'GoogleClientCredentialType',
    {
      useValue: [credentials],
    },
  );

  return credentials.web.client_id;
}

export function setCredentialGoogleClientTester() {
  container
    .resolve(GoogleApiFacade)
    .oAuth2ClientGetInstance(credentials.web.client_id)
    .setCredentials(userToken);
}
