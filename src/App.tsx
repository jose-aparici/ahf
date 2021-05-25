import { AhfContext } from 'contexts/store/context';
import { AhfToasterContext } from 'contexts/toaster/context';
import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AhfFooterContainer } from 'modules/footer/footer.container';
import { AhfHeaderContainer } from 'modules/header/header.container';
import { AppRoutes } from 'pages/App.routes';
import { AhfDevicesPage } from 'pages/devices/devices.page';
import { AhfEventsPage } from 'pages/events/events.page';
import { AhfMainPage } from 'pages/main/main.page';
import { AhfResourcePage } from 'pages/resource/resource.page';

const App: React.FC = () => {
  const { init, listen, scan, stopUpdate } = useSocketHook();
  const { state, dispatch } = useContext(AhfContext);
  const { setShowToaster, setSeverity, setMessage } = useContext(
    AhfToasterContext,
  );
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
    if (state.notification !== undefined) {
      setSeverity(state.notification.severity);
      setMessage(state.notification.text);
      setShowToaster(true);
    }
  }, [setMessage, setShowToaster, setSeverity, state.notification]);

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
          <Route path={AppRoutes.EventsPage} exact component={AhfEventsPage} />
          <Route path={AppRoutes.ResourcePage} component={AhfResourcePage} />
        </Switch>
        <AhfFooterContainer />
      </BrowserRouter>
    </>
  );
};
export default App;
