import { type ReactNode } from 'react';

import { type User } from 'api';
import { Logo } from 'common/components';
import { AdminLayout, SidebarState, useAdminLayoutContext } from 'common/components/AdminLayout';

import { DASHBOARD_ROUTES } from '../../routes';

import Header from './Header';
import Sidebar from './Sidebar';

type Props = {
  user: User;
  children: ReactNode;
};

const DashboardLayout = ({ user, children }: Props) => (
  <AdminLayout
    className="dashboard-layout"
    smallLogo={<Logo to={DASHBOARD_ROUTES.home.to} size="small" style={{ paddingLeft: 12 }} />}
    logo={<DashboardLogo />}
    headerContent={<Header email={user.email} />}
    sidebarContent={<Sidebar />}
  >
    {children}
  </AdminLayout>
);

export default DashboardLayout;

const DashboardLogo = () => {
  const { sidebarState } = useAdminLayoutContext();

  return (
    <Logo
      to={DASHBOARD_ROUTES.home.to}
      size={sidebarState === SidebarState.COLLAPSED_SIDEBAR ? 'small' : 'large'}
      inverted
    />
  );
};
