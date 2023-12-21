import { IExampleRepository } from '@modules/my-module-example/infra/local/repositories/i-example.repository';
import {
  FluigUserModel,
  IFluigUserModel,
} from '@modules/my-module-example/infra/local/models/FluigUserModel';
import { inject, singleton } from 'tsyringe';

@singleton()
export default class ExampleRepository implements IExampleRepository {
  constructor(
    /** Array with registered Fluig users to this API */
    @inject('FluigUserModel')
    private fluigUsers: IFluigUserModel[],
  ) {}

  create(user: FluigUserModel): void {
    this.fluigUsers.push(user);
  }

  delete(_userUUID: string): void {
    throw new Error('Delete not implemented eat');
  }

  update(userUUID: string, user: FluigUserModel) {
    const idx = this.fluigUsers.findIndex(
      fluigUser => fluigUser.userUUID === userUUID,
    );
    this.fluigUsers[idx] = user;
  }

  findById(userUUID: string): FluigUserModel {
    const fluigUser = this.fluigUsers.find(user => user.userUUID === userUUID);
    if (fluigUser) return fluigUser;
    throw new Error('userUUID not found');
  }

  list(): FluigUserModel[] {
    return this.fluigUsers;
  }
}
