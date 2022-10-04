import type { NextApiRequest } from 'next';

import { withApiAuthorized } from 'src/backend/middleware/withApi';
import { ServerResponse } from 'src/backend/middleware/withResponse';
import { WithSessionType } from 'src/backend/middleware/withSession';
import { API_METHODS } from 'src/backend/types';

const users = async (
  req: NextApiRequest & WithSessionType,
  res: ServerResponse
) => {
  return res.resolve(req.session.user);
};

export default withApiAuthorized({
  method: [API_METHODS.GET],
})(users);
