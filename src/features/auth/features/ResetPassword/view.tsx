import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input } from 'antd';

// import { ResetPasswordPayload } from 'common/ApiTypes';
import { useFormRules } from 'common/hooks';

import AuthLayout from '../../components/AuthLayout';

// TODO type onSubmit arg as ResetPasswordPayload
type Props = {
  isLoading: boolean;
  onSubmit: (values: any) => void;
};

const ResetPasswordForm = ({ isLoading, onSubmit }: Props) => {
  const { t } = useTranslation();
  const { required, email, password, passwordMinLength } = useFormRules();

  return (
    <AuthLayout>
      <Form onFinish={onSubmit} layout="vertical">
        <Form.Item
          label={t('fields.email.label', { defaultValue: 'E-mail' })}
          name="email"
          rules={[required, email]}
        >
          <Input
            autoFocus
            placeholder={t('fields.email.placeholder', { defaultValue: 'E-mail' })}
          />
        </Form.Item>
        <Form.Item
          label={t('resetPassword.newPassword.label', { defaultValue: 'New Password' })}
          name="password"
          rules={[required, password, passwordMinLength]}
        >
          <Input.Password
            placeholder={t('resetPassword.password.placeholder', {
              defaultValue: 'Enter New Password',
            })}
          />
        </Form.Item>
        <Button block type="primary" htmlType="submit" loading={isLoading}>
          {t('fields.submit', { defaultValue: 'Submit' })}
        </Button>
      </Form>
    </AuthLayout>
  );
};

export default ResetPasswordForm;
