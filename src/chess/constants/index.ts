import { intlKeys } from '~/src/intl';
import { IBreadcrumb } from '~/src/types';

export const ROUTES = {
  home: '/',
  user: '/user',
  stats: '/user-statistics',
};

export const HOME_BREADCRUMBS: IBreadcrumb[] = [
  { id: 0, isHome: true, labelKey: intlKeys.breadcrumbs.home },
];

export const USER_BREADCRUMBS: IBreadcrumb[] = [
  {
    id: 0,
    isHome: true,
    labelKey: intlKeys.breadcrumbs.home,
    link: ROUTES.home,
    isHover: true,
  },
  { id: 1, labelKey: intlKeys.breadcrumbs.player },
];

export const STATS_BREADCRUMBS: IBreadcrumb[] = [
  {
    id: 0,
    isHome: true,
    labelKey: intlKeys.breadcrumbs.home,
    link: ROUTES.home,
    isHover: true,
  },
  {
    id: 1,
    labelKey: intlKeys.breadcrumbs.player,
    link: ROUTES.user,
    isHover: true,
  },
  { id: 2, labelKey: intlKeys.breadcrumbs.stats },
];
