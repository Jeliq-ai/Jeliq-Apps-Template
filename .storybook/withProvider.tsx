import React from 'react';
import { RoutingConfig, AppContextProvider, UIProvider, NavigationProvider, APIClientProvider, AuthProvider, IframeControllerProvider } from '@core';
import locales from '../src/locales';
import * as dataModels from '../src/data/schema';
import * as routings from '../src/routing/config';

export const appConfig: RoutingConfig = {
  id: 'jeliq-app',
  name: 'Jeliq App',
  logo: {
    url: '',
  },
  auth: {
    needLogin: false,
    afterLoginRouteID: 'home',
    loginRouteID: 'login',
  },
  menuSections: [
    {
      name: 'Main',
      items: [
        {
          title: 'Home',
          routeID: 'home',
        },
      ],
    },
  ],
  mainRouteID: "home",
};

export default function withBackendProvider(Story, context) {
  return (
    <APIClientProvider>
      <AppContextProvider 
        routing={routings?.[Object.keys(routings)?.[0]]}
        dataModels={dataModels}
        >
        <UIProvider locales={locales}>
          <NavigationProvider>
            <IframeControllerProvider>
              <AuthProvider useNavigation={() => null}>
                <Story {...context} />
              </AuthProvider>
            </IframeControllerProvider>
          </NavigationProvider>
        </UIProvider>
      </AppContextProvider>
    </APIClientProvider>
  );
}
