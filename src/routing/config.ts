import { RoutingConfig, RouteConfig } from '@core';

const config: RoutingConfig & { routes: RouteConfig[] } = {
  id: 'jeliq-app',
  name: 'Jeliq App',
  web: {
    baseURL: '/',
  },
  routes: [],
  logo: {
    url: '',
  },
};

export default config;
