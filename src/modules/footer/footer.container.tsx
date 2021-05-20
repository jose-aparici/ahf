import { AhfContext } from 'contexts/store/context';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';

import { getCurrentDateFormatted } from 'domain/date/date.utils';
import { extractDeviceFromPath } from 'domain/path/path.utils';
import { AppRoutes } from 'pages/App.routes';

import { useFooterContainerStyles } from './footer.container.styles';
import { AhfNavigationIconsComponent } from './navigation-icons/navigation-icons.component';

export const AhfFooterContainer: React.FC = () => {
  const classes = useFooterContainerStyles();
  const location = useLocation();
  const [deviceId, setDeviceId] = useState<string>();

  const { state } = useContext(AhfContext);

  const [currentDate, setCurrentDate] = useState(() =>
    getCurrentDateFormatted(),
  );

  useEffect(() => {
    const interval = window.setInterval(
      () => setCurrentDate(getCurrentDateFormatted()),
      60000,
    );

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    setDeviceId(extractDeviceFromPath(location.pathname));
  }, [location.pathname]);

  return (
    <>
      {location.pathname !== AppRoutes.DevicesPage && (
        <>
          <Grid container className={classes.root} alignItems="center">
            <Grid item container xs={4} justify="flex-start">
              <Typography className={classes.text} variant="h6">
                {currentDate}
              </Typography>
            </Grid>
            <Grid container item xs={8} justify="flex-end">
              {deviceId &&
                state.devices[+deviceId] &&
                state.devices[+deviceId].info && (
                  <AhfNavigationIconsComponent
                    status={state.devices[+deviceId].info.status}
                  />
                )}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};
