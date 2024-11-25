
'use client';

import {
  AppContextProvider,
  UIProvider,
  AuthProvider,
  APIClientProvider,
  RoutingConfig,
  RouteConfig,
  IframeControllerProvider,
  MessageProvider,
} from '@core';
import { NavigationProvider, useNavigation } from '@router';
import * as dataModels from '@/src/data/schema';
import locales from '@/src/locales';
import * as routings from '@/src/routing/config';

export default function Providers({
  children,
  routingID
}: {
  children: React.ReactNode
  routingID: keyof typeof routings
}) {
  
  const routing = routings?.[routingID] as RoutingConfig & { routes: RouteConfig[] };
  if (!routing) throw new Error(`routingID: ${routingID} is not defined`);

  return (
    <APIClientProvider>
      <AppContextProvider 
        routing={routing}
        dataModels={dataModels}
      >
        <MessageProvider>
          <UIProvider locales={locales}>
            <NavigationProvider>
              <IframeControllerProvider>
                <AuthProvider useNavigation={useNavigation}>
                  {children}
                </AuthProvider>
              </IframeControllerProvider>
            </NavigationProvider>
          </UIProvider>
        </MessageProvider>
      </AppContextProvider>
    </APIClientProvider>
  )
}
