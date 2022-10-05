import type { NextApiRequest } from 'next';

import { BadRequestError } from 'src/backend/errors/BadRequestError';
import { withApi } from 'src/backend/middleware/withApi';
import { withData, WithDataType } from 'src/backend/middleware/withData';
import { ServerResponse } from 'src/backend/middleware/withResponse';
import { WithSessionType } from 'src/backend/middleware/withSession';
import { API_METHODS, ROLES } from 'src/backend/types';

type LoginDataInput = {
  login: string;
  password: string;
};

const login = async (
  req: NextApiRequest & WithSessionType & WithDataType<LoginDataInput>,
  res: ServerResponse
) => {
  const { login, password } = req.data;

  const sessionUser = {
    id: 1,
    login,
    role: ROLES.ADMIN,
  }; //await getUser(req.DB, login);

  if (!sessionUser) {
    return res.reject(new BadRequestError('Bad request'));
  }

  req.session.user = sessionUser;
  await req.session.save();

  return res.redirect(`/dashboard`);
};

export default withApi({
  method: [API_METHODS.POST],
})(withData<LoginDataInput>(login));
