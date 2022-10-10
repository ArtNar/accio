import React from 'react';

import { Button, Form, Input } from 'src/frontend/components/antd/index';
import LoginHeader from 'src/frontend/components/login-header/login-header';

import styles from './styles.module.scss';

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <LoginHeader></LoginHeader>
      <div className={styles.fromContainer}>
        <Form
          className={styles.form}
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          size='large'
          layout='vertical'
        >
          <Form.Item
            className={styles.field}
            name='username'
            rules={[{ required: true }]}
          >
            <Input className={styles.input} placeholder='Username' />
          </Form.Item>
          <Form.Item
            className={styles.field}
            name='password'
            rules={[{ required: true }]}
          >
            <Input.Password className={styles.input} placeholder='Password' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
