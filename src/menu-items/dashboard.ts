// assets
import { IconDashboard } from '@tabler/icons-react';
import { IMenuList } from 'interfaces';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard: IMenuList = {
  id: 'dashboard',
  title: 'Dashboard group',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
