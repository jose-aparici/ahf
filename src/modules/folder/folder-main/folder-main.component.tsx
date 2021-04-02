import clsx from 'clsx';
import React from 'react';

import { Grid, Paper, Typography } from '@material-ui/core';
import RadioIcon from '@material-ui/icons/Radio';

import { Param } from 'domain/param/param.types';

import { useFolderMainComponentStyles } from './folder-main.component.styles';

interface Props {
  params: Param[];
}
export const AhfFolderMainComponent: React.FC<Props> = ({ params }: Props) => {
  const classes = useFolderMainComponentStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid item>
              <Typography className={clsx(classes.containerTitle)}>
                Mains parameter
              </Typography>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Typography className={clsx(classes.parameterTitle)}>
                  Main frequency
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={clsx(classes.parameterTitle)}>
                  Rotating field
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={clsx(classes.parameterValue)}>
                  {params[0].value
                    ? `${params[0].value} ${params[0].unit}`
                    : '-'}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography className={clsx(classes.parameterValue)}>
                  {params[1].value
                    ? `${params[1].value} ${params[1].unit}`
                    : '-'}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Typography className={clsx(classes.parameterTitle)}>
                  Voltage
                </Typography>
              </Grid>
              <Grid item container xs={12} spacing={2}>
                {[2, 3, 4].map((item, index) => (
                  <Grid
                    key={item}
                    item
                    container
                    xs={4}
                    justify="space-between"
                  >
                    <Grid item>
                      <Typography className={clsx(classes.parameterValue)}>
                        {`L${index + 1}`}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={clsx(classes.parameterValue)}>
                        {params[item].value && params[item].unit
                          ? `${params[item].value} ${params[item].unit}`
                          : ''}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
};
