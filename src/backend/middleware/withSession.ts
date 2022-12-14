import { IronSession } from 'iron-session';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import { UserType } from 'src/common/types/user';

import { NextFunction } from '../types';

export type WithSessionType = {
  session: IronSession & { user?: UserType };
};

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
