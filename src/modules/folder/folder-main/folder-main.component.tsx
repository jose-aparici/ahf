import clsx from 'clsx';
import React from 'react';

import { Typography } from '@material-ui/core';

import { Param } from 'domain/param/param.types';

import { useFolderMainComponentStyles } from './folder-main.component.styles';

interface Props {
  params: Param[];
}
export const AhfFolderMainComponent: React.FC<Props> = ({ params }: Props) => {
  const classes = useFolderMainComponentStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={clsx(classes.containerTitle, classes.fullCell)}>
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
        <Typography className={clsx(classes.parameterTitle, classes.fullCell)}>
          Voltages
        </Typography>
        {[2, 3, 4].map((item) => (
          <Typography
            key={item}
            className={clsx(classes.parameterValue, classes.twoCells)}
          >
            {params[item].value
              ? `${params[item].value} ${params[item].unit}`
              : '-'}
          </Typography>
        ))}

        <Typography className={clsx(classes.parameterTitle, classes.fullCell)}>
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

        <Typography className={clsx(classes.parameterTitle, classes.fullCell)}>
          THDi
        </Typography>
        {[2, 3, 4].map((item) => (
          <Typography
            key={item}
            className={clsx(classes.parameterValue, classes.twoCells)}
          >
            {params[item].value
              ? `${params[item].value} ${params[item].unit}`
              : '-'}
          </Typography>
        ))}
      </div>
      <div className={classes.container}>hola</div>
    </div>
  );
};
