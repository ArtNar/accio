import * as dotenv from 'dotenv';
import { NextApiRequest } from 'next';

import { API_METHODS, NextFunction } from '../types';

import withAuthorizedUser from './withAuthorizedUser';
import { withCatchException } from './withCatchException';
import { withDB } from './withDB';
import { withHttpMethod } from './withHttpMethod';
import { withResponse, ServerResponse } from './withResponse';
import { withSession } from './withSession';

dotenv.config();

export type WithApiProps = {
  method: API_METHODS[];
};

export const withApiBefore = (
  next: NextFunction<NextApiRequest, ServerResponse>
) => withSession(withResponse(next));

export const withApiAfter =
  (props: WithApiProps) =>
  (next: NextFunction<NextApiRequest, ServerResponse>) =>
    withCatchException(withHttpMethod(props.method)(withDB(next)));

export const withApi =
  (props: WithApiProps) =>
  (next: NextFunction<NextApiRequest, ServerResponse>) =>
    withApiBefore(withApiAfter(props)(next));

export const withApiAuthorized =
  (props: WithApiProps) =>
  (next: NextFunction<NextApiRequest, ServerResponse>) =>
    withApiBefore(withAuthorizedUser(withApiAfter(props)(next)));
