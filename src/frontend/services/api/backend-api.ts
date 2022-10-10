import { LoginDataInputType } from 'src/common/types/api/login';
import { UserType } from 'src/common/types/user';

import { ApiBase } from './api-base';
import { appConfig } from './api-config';

const API_ROUTES = {
  getUsers: 'api/users',
  login: 'api/login',
  logout: 'api/logout',
};

type OkStatus = {
  ok: boolean;
};

export class BackendApi extends ApiBase {
  constructor() {
    super({
      baseURL: appConfig.backendUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public async login(data: LoginDataInputType): Promise<OkStatus> {
    return this.create(API_ROUTES.login, data);
  }

  public async logout(): Promise<OkStatus> {
    return this.fetch(API_ROUTES.logout);
  }

  public async getUsers(): Promise<UserType[]> {
    return this.fetch(API_ROUTES.getUsers);
  }
}
