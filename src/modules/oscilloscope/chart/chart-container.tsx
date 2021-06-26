import 'chartjs-plugin-zoom';

import clsx from 'clsx';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import { Slider } from '@material-ui/core';

import { useChartContainerStyles } from './chart-container.styles';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      data: [12, 190, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    zoom: {
      pan: {
        enabled: true,
        mode: 'x',
      },
      zoom: {
        enabled: true,
        drag: true,
        mode: 'xy',
      },
    },
  },
  maintainAspectRatio: false,

  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

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

  /* const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  }; */

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    value: number | number[],
  ) => {
    debugger;
    console.log('entra', event, value);
    setValue(value as number[]);
  };

  const handleValueLabelFormat = (_: number, index: number) =>
    index === 0 ? `C1` : `C2`;

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <Slider
        classes={{ valueLabel: classes.sliderLabel }}
        value={value}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        onChange={handleChange}
        valueLabelFormat={handleValueLabelFormat}
        track="inverted"
      />
      <Line type="" data={data} options={options} height={100} />
    </main>
  );
};
