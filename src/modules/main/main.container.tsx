import clsx from 'clsx';
import { AhfContext } from 'contexts/store/context';
import React, { useContext, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import { useHistory } from 'react-router';

import { Grid, Paper } from '@material-ui/core';

import { useMainContainerStyles } from './main.container.styles';

export const AhfMainContainer: React.FC = () => {
  const classes = useMainContainerStyles();
  const { state } = useContext(AhfContext);
  const history = useHistory();

  useEffect(() => {
    if (state.initialDevice >= 0 && state.devices[state.initialDevice]) {
      history.push(state.devices[state.initialDevice].structure.id);
    }
  }, [state.initialDevice, state.devices, history]);

  return (
    <Grid container className={classes.container}>
      <Grid item xs={6}>
        <Paper className={clsx(classes.paper, classes.paperLeft)}>
          <ContentLoader
            speed={2}
            width={367}
            height={360}
            backgroundColor="#f0f0f0"
            foregroundColor="#dedede"
            viewBox="0 0 392 376"
          >
            <rect x="0" y="0" rx="0" ry="0" width="390" height="28" />
            <rect x="0" y="40" rx="0" ry="0" width="390" height="52" />
            <rect x="0" y="105" rx="0" ry="0" width="390" height="176" />
            <rect x="0" y="302" rx="0" ry="0" width="390" height="68" />
          </ContentLoader>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={clsx(classes.paper, classes.paperRight)}>
          <ContentLoader
            speed={2}
            width={367}
            height={360}
            backgroundColor="#f0f0f0"
            foregroundColor="#dedede"
            viewBox="0 0 392 376"
          >
            <rect x="0" y="0" rx="0" ry="0" width="390" height="28" />
            <rect x="0" y="40" rx="0" ry="0" width="390" height="232" />
            <rect x="0" y="285" rx="0" ry="0" width="390" height="24" />
            <rect x="0" y="320" rx="0" ry="0" width="390" height="52" />
          </ContentLoader>
        </Paper>
      </Grid>
    </Grid>
  );
};
