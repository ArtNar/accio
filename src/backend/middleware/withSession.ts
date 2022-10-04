import { IronSession } from 'iron-session';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import { NextFunction, UserType } from '../types';

export type WithSessionType = {
  session: IronSession & { user?: UserType };
};

console.log(
  process.env.SECRET_COOKIE_PASSWORD,
  'process.env.SECRET_COOKIE_PASSWORD'
);
const sessionOptions = {
  cookieName: 'accio-session',
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export const withSession = (
  next: NextFunction<NextApiRequest & WithSessionType, NextApiResponse>
) => {
  return withIronSessionApiRoute(next, sessionOptions);
};
