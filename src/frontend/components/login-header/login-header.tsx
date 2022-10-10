import React from 'react';

import { Button, PageHeader } from 'src/frontend/components/antd/index';

const LoginHeader = () => {
  return (
    <PageHeader title='Accio' extra={[<Button key='1'>Sign up</Button>]} />
  );
};

export default LoginHeader;
