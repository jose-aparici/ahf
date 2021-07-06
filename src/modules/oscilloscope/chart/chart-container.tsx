import 'chartjs-plugin-zoom';

import clsx from 'clsx';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import { Slider } from '@material-ui/core';

import { OPTIONS } from 'domain/chart/chart.constants';

import { useChartContainer } from './chart-container.hook';
import { useChartContainerStyles } from './chart-container.styles';

interface Props {
  open: boolean;
}

interface ThumProps {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

export const AhfChartContainer: React.FC<Props> = ({ open }: Props) => {
  const classes = useChartContainerStyles();
  const [value, setValue] = useState<number[]>([0, 100]);

  const { data } = useChartContainer();

  /* const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  }; */

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    value: number | number[],
  ) => {
    setValue(value as number[]);
  };

  const handleValueLabelFormat = (_: number, index: number) =>
    index === 0 ? `C1` : `C2 `;

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <Slider
        classes={{
          valueLabel: classes.sliderLabel,
        }}
        className={clsx(classes.sliderRoot, {
          [classes.sliderRootShift]: open,
        })}
        value={value}
        marks
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        onChange={handleChange}
        valueLabelFormat={handleValueLabelFormat}
        track="inverted"
        min={0}
        max={5}
      />

      {data && <Line type="line" data={data} options={OPTIONS} height={100} />}
    </main>
  );
};
