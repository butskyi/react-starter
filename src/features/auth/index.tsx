import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom';

import { rootPath } from 'config';
import { RequireIsAnonymous } from 'common/auth';
import { LoadingScreen, NotFound } from 'common/components';

import { AUTH_ROUTES } from './routes';
import AuthLayout from './components/AuthLayout';

const SignUp = lazy(() => import('./pages/SignUp'));
const ForgottenPassword = lazy(() => import('./pages/ForgottenPassword'));
const Login = lazy(() => import('./pages/Login'));
const ConfirmEmail = lazy(() => import('./pages/ConfirmEmail'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

const Auth = () => (
  <Routes>
    <Route
      element={
        <AuthLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </AuthLayout>
      }
    >
      <Route element={<RequireIsAnonymous redirectTo={rootPath} />}>
        <Route index element={<Navigate replace to={AUTH_ROUTES.login.to} />} />
        <Route path={AUTH_ROUTES.login.path} element={<Login />} />
        <Route path={AUTH_ROUTES.signUp.path} element={<SignUp />} />
        <Route path={AUTH_ROUTES.confirmEmail.path} element={<ConfirmEmail />} />
      </Route>
      <Route path={AUTH_ROUTES.forgottenPassword.path} element={<ForgottenPassword />} />
      <Route path={AUTH_ROUTES.resetPassword.path} element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Auth;
