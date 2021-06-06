import clsx from 'clsx';
import { ReactComponent as AhfHarmonicFilterSvg } from 'images/harmonic_filter.svg';
import { ReactComponent as SyncModuleSvg } from 'images/sync_module.svg';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Grid, Paper, Typography } from '@material-ui/core';

import { DeviceType } from 'domain/device/device.types';
import { Param } from 'domain/param/param.types';
import { getParamValue } from 'domain/param/param.utils';

import { useFolderMainComponentStyles } from './folder-main.component.styles';

interface Props {
  params: Param[];
  deviceType: DeviceType;
  currentLanguage: number;
}
export const AhfFolderMainComponent: React.FC<Props> = ({
  params,
  deviceType,
  currentLanguage,
}: Props) => {
  const classes = useFolderMainComponentStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Paper className={clsx(classes.paper, classes.paperLeft)}>
            <Grid item>
              <Typography variant="h2" className={clsx(classes.containerTitle)}>
                {t('RESOURCE.MAIN.TITLES.MAINS_PARAMETERS')}
              </Typography>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h4">
                  {t('RESOURCE.MAIN.TITLES.MAINS_PARAMETERS')}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h4">
                  {t('RESOURCE.MAIN.TITLES.ROTATING_FIELD')}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  className={clsx(classes.parameterValue)}
                >
                  {params[0].value !== undefined
                    ? `${getParamValue(params[0], currentLanguage)} ${
                        params[0].unit
                      }`
                    : '-'}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h5"
                  className={clsx(classes.parameterValue)}
                >
                  {params[1].value !== undefined
                    ? `${getParamValue(params[1], currentLanguage)} ${
                        params[1].unit
                      }`
                    : '-'}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              {[
                {
                  title: t('RESOURCE.MAIN.TITLES.VOLTAGE'),
                  params: [2, 3, 4],
                },
                {
                  title: t('RESOURCE.MAIN.TITLES.CURRENTS'),
                  params: [5, 6, 7],
                },
                {
                  title: t('RESOURCE.MAIN.TITLES.THDI'),
                  params: [8, 9, 10],
                },
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
                            {params[item].value !== undefined &&
                            params[item].unit
                              ? `${getParamValue(
                                  params[item],
                                  currentLanguage,
                                )} ${params[item].unit}`
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
                {deviceType === DeviceType.ACTIVE_HARMONIC_FILER ? (
                  <AhfHarmonicFilterSvg className={classes.deviceIcon} />
                ) : (
                  <SyncModuleSvg className={classes.deviceIcon} />
                )}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={clsx(classes.paper, classes.paperRight)}>
            <Grid item>
              <Typography variant="h2" className={clsx(classes.containerTitle)}>
                {t('RESOURCE.MAIN.TITLES.FILTER_PARAMETERS')}
              </Typography>
            </Grid>
            <Grid container>
              {[
                {
                  labels: [
                    t('RESOURCE.MAIN.TITLES.STATE'),
                    t('RESOURCE.MAIN.TITLES.OUTPUT'),
                  ],
                  paramsIndex: [11, 12],
                },
                {
                  labels: [t('RESOURCE.MAIN.TITLES.CURRENT_TRANSFORMER'), ''],
                  paramsIndex: [13, 14],
                },
                {
                  labels: [
                    t('RESOURCE.MAIN.TITLES.HARMONIC_COMPENSATION'),
                    t('RESOURCE.MAIN.TITLES.REACTIVE_POWER_COMPENSATION'),
                  ],
                  paramsIndex: [15, 16],
                },
                {
                  labels: [
                    t('RESOURCE.MAIN.TITLES.REACTIVE_POWER_CONTROL'),
                    t('RESOURCE.MAIN.TITLES.LOAD_BALANCING'),
                  ],
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
                          {params[paramIndex].value !== undefined
                            ? `${getParamValue(
                                params[paramIndex],
                                currentLanguage,
                              )} ${params[paramIndex].unit}`
                            : '-'}
                        </Typography>
                      </Grid>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </Grid>
            <Grid item>
              <Typography variant="h4">
                {t('RESOURCE.MAIN.TITLES.DPF')}
              </Typography>
            </Grid>
            <Grid container>
              {[
                t('RESOURCE.MAIN.TITLES.LOWER_LIMIT'),
                t('RESOURCE.MAIN.TITLES.ACTUAL'),
                t('RESOURCE.MAIN.TITLES.UPPER_LIMIT'),
              ].map((label) => (
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
                    {params[paramIndex].value !== undefined
                      ? `${getParamValue(
                          params[paramIndex],
                          currentLanguage,
                        )} ${params[paramIndex].unit}`
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
