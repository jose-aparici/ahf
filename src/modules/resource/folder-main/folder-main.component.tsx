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
              <Typography variant="h2" className={clsx(classes.containerTitle)}>
                Mains parameters
              </Typography>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h4">Main frequency</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4">Rotating field</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  className={clsx(classes.parameterValue)}
                >
                  {params[0].value
                    ? `${params[0].value} ${params[0].unit}`
                    : '-'}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  className={clsx(classes.parameterValue)}
                >
                  {params[1].value
                    ? `${params[1].value} ${params[1].unit}`
                    : '-'}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              {[
                { title: 'Voltage', params: [2, 3, 4] },
                { title: 'Currents', params: [5, 6, 7] },
                { title: 'THDi', params: [8, 9, 10] },
              ].map((row) => (
                <React.Fragment key={row.title}>
                  <Grid item xs={12}>
                    <Typography variant="h4">{row.title}</Typography>
                  </Grid>
                  <Grid item container xs={12} spacing={2}>
                    {row.params.map((item, index) => (
                      <Grid
                        key={item}
                        item
                        container
                        xs={4}
                        justify="space-between"
                      >
                        <Grid item>
                          <Typography
                            variant="h5"
                            className={clsx(classes.parameterValue)}
                          >
                            {`L${index + 1}`}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="h5"
                            className={clsx(classes.parameterValue)}
                          >
                            {params[item].value && params[item].unit
                              ? `${params[item].value} ${params[item].unit}`
                              : ''}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <RadioIcon className={classes.deviceIcon} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid item>
              <Typography variant="h2" className={clsx(classes.containerTitle)}>
                Filter parameters
              </Typography>
            </Grid>
            <Grid container>
              {[
                { labels: ['State', 'Output'], paramsIndex: [11, 12] },
                { labels: ['Current transformer', ''], paramsIndex: [13, 14] },
                {
                  labels: [
                    'Harmonic compensation',
                    'Reactive power compensation',
                  ],
                  paramsIndex: [15, 16],
                },
                {
                  labels: ['Reactive power control', 'Load balancing'],
                  paramsIndex: [17, 18],
                },
              ].map((row, index) => (
                <React.Fragment key={index}>
                  {row.labels.map((label) => (
                    <React.Fragment key={label}>
                      <Grid item xs={6}>
                        <Typography variant="h4">{label}</Typography>
                      </Grid>
                    </React.Fragment>
                  ))}
                  {row.paramsIndex.map((paramIndex, index) => (
                    <React.Fragment key={index}>
                      <Grid item xs={6}>
                        <Typography
                          variant="h5"
                          className={clsx(classes.parameterValue)}
                        >
                          {params[paramIndex].value
                            ? `${params[paramIndex].value} ${params[paramIndex].unit}`
                            : '-'}
                        </Typography>
                      </Grid>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </Grid>
            <Grid item>
              <Typography variant="h4">DPF</Typography>
            </Grid>
            <Grid container>
              {['Lower limit', 'Actual', 'Upper limit'].map((label) => (
                <Grid item xs={4} key={label}>
                  <Typography variant="h4">{label}</Typography>
                </Grid>
              ))}
              {[19, 20, 21].map((paramIndex) => (
                <Grid item xs={4} key={paramIndex}>
                  <Typography
                    variant="h5"
                    className={clsx(classes.parameterValue)}
                  >
                    {params[paramIndex].value
                      ? `${params[paramIndex].value} ${params[paramIndex].unit}`
                      : '-'}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
