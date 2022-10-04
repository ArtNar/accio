import { NextApiRequest } from 'next';

import { API_METHODS, NextFunction } from '../types';

import withAuthorizedUser from './withAuthorizedUser';
import { withCatchException } from './withCatchException';
import { withDB } from './withDB';
import { withHttpMethod } from './withHttpMethod';
import { withResponse, ServerResponse } from './withResponse';
import { withSession } from './withSession';

export type WithApiProps = {
  method: API_METHODS[];
};

export const withApi = (props: WithApiProps) => {
  return function withApiNext(
    next: NextFunction<NextApiRequest, ServerResponse>
  ) {
    return withSession(
      withResponse(
        withCatchException(withHttpMethod(props.method)(withDB(next)))
      )
    );
  };
};

export const withApiAuthorized = (props: WithApiProps) => {
  return function withApiNext(
    next: NextFunction<NextApiRequest, ServerResponse>
  ) {
    return withApi(props)(withAuthorizedUser(next));
  };
};
