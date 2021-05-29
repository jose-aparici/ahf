import clsx from 'clsx';
import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import InfoIcon from '@material-ui/icons/Info';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import WarningIcon from '@material-ui/icons/Warning';
import Alert, { Color } from '@material-ui/lab/Alert';

import { Log } from 'domain/event/events.type';

import { useTableComponentStyles } from './table.component.styles';

interface Props {
  rows: Log[];
}
export const AhfTableComponent: React.FC<Props> = ({ rows }: Props) => {
  const classes = useTableComponentStyles();

  return (
    <>
      {rows.map((row, index) => {
        return (
          <Alert
            key={index}
            severity={(row.type as unknown) as Color}
            classes={{
              root: classes.alertRoot,
              message: classes.row,
              standardError: classes.standardError,
              standardInfo: classes.standardInfo,
              standardSuccess: classes.standardSuccess,
              standardWarning: classes.standardWarning,
            }}
            iconMapping={{
              success: <StarBorderIcon fontSize="inherit" />,
              error: <CancelIcon fontSize="inherit" />,
              info: <InfoIcon fontSize="inherit" />,
              warning: <WarningIcon fontSize="inherit" />,
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={1}>
                <Typography className={classes.text}>{row.date}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography className={classes.text}>{row.time}</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography className={classes.text}>{row.message}</Typography>
              </Grid>
              <Grid item xs={3} alignContent="flex-end">
                <Typography className={clsx(classes.text, classes.textRight)}>
                  {row.operatingHours}
                </Typography>
              </Grid>
            </Grid>
          </Alert>
        );
      })}
    </>
  );
};
