import type { NextApiRequest } from 'next';

import { withApi } from 'src/backend/middleware/withApi';
import { ServerResponse } from 'src/backend/middleware/withResponse';
import { WithSessionType } from 'src/backend/middleware/withSession';
import { API_METHODS } from 'src/backend/types';

const logout = async (
  req: NextApiRequest & WithSessionType,
  res: ServerResponse
) => {
  if (req.session.destroy) {
    await req.session.destroy();
  }

  return res.resolve();
};

export default withApi({
  method: [API_METHODS.GET],
})(logout);
