import clsx from 'clsx';
import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';
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
      <Card>
        <CardContent className={classes.container}>
          <Typography
            className={clsx(classes.containerTitle, classes.fullCell)}
          >
            Mains parameter
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.threeCells)}
          >
            Main frequency
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.threeCells)}
          >
            Rotating field
          </Typography>
          <Typography
            className={clsx(
              classes.parameterValue,
              classes.parameterLeft,
              classes.threeCells,
            )}
          >
            {params[0].value ? `${params[0].value} ${params[0].unit}` : '-'}
          </Typography>
          <Typography
            className={clsx(
              classes.parameterValue,
              classes.parameterLeft,
              classes.threeCells,
            )}
          >
            {params[1].value ? `${params[1].value} ${params[1].unit}` : '-'}
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.fullCell)}
          >
            Voltages
          </Typography>
          {[2, 3, 4].map((item, index) => (
            <Typography
              key={item}
              className={clsx(classes.parameterValue, classes.twoCells)}
            >
              {params[item].value
                ? `${params[item].value} ${params[item].unit}`
                : '-'}
            </Typography>
          ))}
          <Typography
            className={clsx(classes.parameterTitle, classes.fullCell)}
          >
            Currents
          </Typography>
          {[5, 6, 7].map((item) => (
            <Typography
              key={item}
              className={clsx(classes.parameterValue, classes.twoCells)}
            >
              {params[item].value
                ? `${params[item].value} ${params[item].unit}`
                : '-'}
            </Typography>
          ))}
          <Typography
            className={clsx(classes.parameterTitle, classes.fullCell)}
          >
            THDi
          </Typography>
          {[8, 9, 10].map((item) => (
            <Typography
              key={item}
              className={clsx(classes.parameterValue, classes.twoCells)}
            >
              {params[item].value
                ? `${params[item].value} ${params[item].unit}`
                : '-'}
            </Typography>
          ))}
          <div className={classes.deviceIconContainer}>
            <RadioIcon className={classes.deviceIcon} />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className={classes.container}>
          <Typography
            className={clsx(classes.containerTitle, classes.fullCell)}
          >
            Filter parameters
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.threeCells)}
          >
            State
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.threeCells)}
          >
            Output
          </Typography>
          <Typography
            className={clsx(
              classes.parameterValue,
              classes.parameterLeft,
              classes.threeCells,
            )}
          >
            {params[11].value ? `${params[11].value} ${params[11].unit}` : '-'}
          </Typography>
          <Typography
            className={clsx(
              classes.parameterValue,
              classes.parameterLeft,
              classes.threeCells,
            )}
          >
            {params[12].value ? `${params[12].value} ${params[12].unit}` : '-'}
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.fullCell)}
          >
            Current transformer
          </Typography>
          <Typography
            className={clsx(
              classes.parameterValue,
              classes.parameterLeft,
              classes.threeCells,
            )}
          >
            {params[13].value ? `${params[13].value} ${params[13].unit}` : '-'}
          </Typography>
          <Typography
            className={clsx(
              classes.parameterValue,
              classes.parameterLeft,
              classes.threeCells,
            )}
          >
            {params[14].value ? `${params[14].value} ${params[14].unit}` : '-'}
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.threeCells)}
          >
            Harmonic compensation
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.threeCells)}
          >
            Reactive power compensation
          </Typography>
          <Typography
            className={clsx(
              classes.parameterValue,
              classes.parameterLeft,
              classes.threeCells,
            )}
          >
            {params[15].value ? `${params[15].value} ${params[15].unit}` : '-'}
          </Typography>
          <Typography
            className={clsx(
              classes.parameterValue,
              classes.parameterLeft,
              classes.threeCells,
            )}
          >
            {params[16].value ? `${params[16].value} ${params[16].unit}` : '-'}
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.threeCells)}
          >
            Reactive power control
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.threeCells)}
          >
            Load balancing
          </Typography>
          <Typography
            className={clsx(
              classes.parameterValue,
              classes.parameterLeft,
              classes.threeCells,
            )}
          >
            {params[17].value ? `${params[17].value} ${params[17].unit}` : '-'}
          </Typography>
          <Typography
            className={clsx(
              classes.parameterValue,
              classes.parameterLeft,
              classes.threeCells,
            )}
          >
            {params[18].value ? `${params[18].value} ${params[18].unit}` : '-'}
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.fullCell)}
          >
            DPF
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.twoCells)}
          >
            Lower limit
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.twoCells)}
          >
            Actual
          </Typography>
          <Typography
            className={clsx(classes.parameterTitle, classes.twoCells)}
          >
            Upper limit
          </Typography>
          <Typography
            className={clsx(
              classes.parameterValue,
              classes.parameterLeft,
              classes.twoCells,
            )}
          >
            {params[19].value ? `${params[19].value} ${params[19].unit}` : '-'}
          </Typography>
          <Typography
            className={clsx(
              classes.parameterValue,
              classes.parameterLeft,
              classes.twoCells,
            )}
          >
            {params[20].value ? `${params[20].value} ${params[20].unit}` : '-'}
          </Typography>
          <Typography
            className={clsx(
              classes.parameterValue,
              classes.parameterLeft,
              classes.twoCells,
            )}
          >
            {params[21].value ? `${params[21].value} ${params[21].unit}` : '-'}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
