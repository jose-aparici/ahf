import { useAhfErrorFallbackStyles } from 'ErrorFallback.styles';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Grid, Typography } from '@material-ui/core';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';
import ReplayIcon from '@material-ui/icons/Replay';

import { AhfPage } from 'pages/ahf.page';

interface Props {
  resetErrorBoundary: (...args: Array<unknown>) => void;
}

export const AhfErrorFallback: React.FC<Props> = ({
  resetErrorBoundary,
}: Props) => {
  const { t } = useTranslation();
  const classes = useAhfErrorFallbackStyles();
  return (
    <AhfPage className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <ErrorTwoToneIcon style={{ fontSize: 50 }} />
        </Grid>
        <Grid item xs={12}>
          <Typography>{t('ERROR.TITLE')}</Typography>
        </Grid>
        <Grid item xs={12} className={classes.buttonGrid}>
          <Button
            className={classes.replayIcon}
            variant="contained"
            size="large"
            startIcon={<ReplayIcon />}
            onClick={resetErrorBoundary}
          >
            {t('ERROR.BUTTONS.TRY_AGAIN')}
          </Button>
        </Grid>
      </Grid>
    </AhfPage>
  );
};
