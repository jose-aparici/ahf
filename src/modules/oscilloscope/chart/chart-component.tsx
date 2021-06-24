import 'chartjs-plugin-zoom';

import clsx from 'clsx';
import React from 'react';
import { Line } from 'react-chartjs-2';

import { useChartComponentStyles } from './chart-component.styles';

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

export const AhfChartComponent: React.FC<Props> = ({ open }: Props) => {
  const classes = useChartComponentStyles();
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <Line type="" data={data} options={options} height={100} />
    </main>
  );
};
