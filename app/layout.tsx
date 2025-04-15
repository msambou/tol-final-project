import * as React from 'react';
import { NextAppProvider } from '@toolpad/core/nextjs';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Navigation } from '@toolpad/core/AppProvider';
import LinearProgress from '@mui/material/LinearProgress';
import theme from '../theme';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: '',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'analyses',
    title: 'My Analyses',
    icon: <AnalyticsIcon />,
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <React.Suspense fallback={<LinearProgress />}>
            <NextAppProvider theme={theme} navigation={NAVIGATION}>
              {children}
            </NextAppProvider>
          </React.Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
