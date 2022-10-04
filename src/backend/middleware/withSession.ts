import { IronSession } from 'iron-session';
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';

import { NextFunction, UserType } from '../types';

export type WithSessionType = {
  session: IronSession & { user?: UserType };
};

export const withSession = (
  next: NextFunction<NextApiRequest & WithSessionType, NextApiResponse>
) => {
  return withIronSessionApiRoute(next, {
    cookieName: 'accio_session',
    password: 'complex_password_at_least_32_characters_long',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });
};
