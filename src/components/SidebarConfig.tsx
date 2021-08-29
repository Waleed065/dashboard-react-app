import { Icon, IconifyIcon } from '@iconify/react';
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import shoppingBagFill from "@iconify/icons-eva/shopping-bag-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
import { staticPaths } from '../constants';

// ----------------------------------------------------------------------

const {dashboardRoute: {dashboardRoute, bannersRoute, textLinkRoute, blogRoute,  productsRoute, userRoute}} = staticPaths;


const getIcon = (name: IconifyIcon) => <Icon  icon={name} width={22} height={22}  />;

const sidebarConfig = [
  {
    title: "dashboard",
    path: dashboardRoute,
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "user",
    path: `${dashboardRoute}/${userRoute}`,
    icon: getIcon(peopleFill),
  },
  {
    title: "text link",
    path: `${dashboardRoute}/${textLinkRoute}`,
    icon: getIcon(peopleFill),
  },
  {
    title: "banners",
    path: `${dashboardRoute}/${bannersRoute}`,
    icon: getIcon(peopleFill),
  },
  {
    title: "product",
    path: `${dashboardRoute}/${productsRoute}`,
    icon: getIcon(shoppingBagFill),
  },
  {
    title: "blog",
    path: `${dashboardRoute}/${blogRoute}`,
    icon: getIcon(fileTextFill),
  }
];

export default sidebarConfig;
