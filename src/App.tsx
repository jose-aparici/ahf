import { AhfContext } from 'contexts/store/context';
import { AhfToasterContext } from 'contexts/toaster/context';
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AhfFooterContainer } from 'modules/footer/footer.container';
import { AhfHeaderContainer } from 'modules/header/header.container';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';
import { AppRoutes } from 'pages/App.routes';
import { AhfDevicesPage } from 'pages/devices/devices.page';
import { AhfEventsPage } from 'pages/events/events.page';
import { AhfMainPage } from 'pages/main/main.page';
import { AhfResourcePage } from 'pages/resource/resource.page';
import { AhfSettingsAdminPage } from 'pages/settings-admin/settings-admin.page';
import { AhfSettingsPage } from 'pages/settings/settings.page';

const App: React.FC = () => {
  const { init, listen, scan, stopUpdate } = useSocketHook();
  const { state, dispatch } = useContext(AhfContext);
  const { displayNotification } = useContext(AhfToasterContext);
  useEffect(() => {
    init();
    stopUpdate();
    const subscription = listen(dispatch);
    scan();

    return () => {
      subscription.unsubscribe();
    };
  }, [init, listen, scan, stopUpdate, dispatch]);

  useEffect(() => {
    state.notification && displayNotification(state.notification);
  }, [displayNotification, state.notification]);

  return (
    <>
      <BrowserRouter>
        <AhfHeaderContainer />
        <Switch>
          <Route path={AppRoutes.MainPage} exact component={AhfMainPage} />
          <Route
            path={AppRoutes.DevicesPage}
            exact
            component={AhfDevicesPage}
          />
          <Route
            path={AppRoutes.SettingsPage}
            exact
            component={AhfSettingsPage}
          />
          <Route path={AppRoutes.EventsPage} exact component={AhfEventsPage} />
          <Route
            path={AppRoutes.SettingsAdminPage}
            exact
            component={AhfSettingsAdminPage}
          />
          <Route path={AppRoutes.ResourcePage} component={AhfResourcePage} />
        </Switch>
        <AhfFooterContainer />
      </BrowserRouter>
    </>
  );
};
export default App;
