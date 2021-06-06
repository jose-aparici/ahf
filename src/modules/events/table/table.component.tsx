import clsx from 'clsx';
import React from 'react';
import { FixedSizeList as List } from 'react-window';

import { Grid, Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import InfoIcon from '@material-ui/icons/Info';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import WarningIcon from '@material-ui/icons/Warning';
import Alert, { Color } from '@material-ui/lab/Alert';

import { Log, LogType } from 'domain/event/events.type';

import { useTableComponentStyles } from './table.component.styles';

interface Props {
  rows: Log[];
}
const AhfTableComponent: React.FC<Props> = ({ rows }: Props) => {
  const classes = useTableComponentStyles();

  return (
    <List
      height={784}
      itemCount={rows.length}
      itemSize={37}
      width={'100%'}
      itemData={rows}
      className={classes.row}
    >
      {({ data, index, style }) => (
        <Alert
          key={index}
          style={style}
          severity={
            data[index].type === LogType.STATUS
              ? 'success'
              : ((data[index].type as unknown) as Color)
          }
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
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Typography className={classes.text}>
                {data[index].date}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography className={classes.text}>
                {data[index].time}
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography className={classes.text}>
                {data[index].message}
              </Typography>
            </Grid>
            <Grid item xs={3} container alignContent="flex-end">
              <Typography className={clsx(classes.text, classes.textRight)}>
                {data[index].operatingHours}
              </Typography>
            </Grid>
          </Grid>
        </Alert>
      )}
    </List>
  );
};

export const AhfTableComponentMemoized = React.memo(AhfTableComponent);
