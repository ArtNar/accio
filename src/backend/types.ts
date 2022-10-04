export enum API_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum ROLES {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type NextFunction<T, R> = {
  (req: T, res: R): any;
};

export type UserType = {
  id: number;
  login: string;
  role: ROLES;
};
