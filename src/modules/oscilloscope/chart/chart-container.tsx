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
  onSliderValuesChange: (value: number[]) => void;
}

export const AhfChartContainer: React.FC<Props> = ({
  open,
  onSliderValuesChange,
}: Props) => {
  const classes = useChartContainerStyles();

  const { data } = useChartContainer();
  const [sliderValues, setSliderValues] = useState<number[]>([
    0,
    data.labels.length,
  ]);

  /* const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  }; */

  const handleChangeSlider = (
    event: React.ChangeEvent<unknown>,
    value: number | number[],
  ) => {
    const sliderValues = value as number[];
    setSliderValues(sliderValues);
    onSliderValuesChange(sliderValues);
  };

  const handleValueLabelFormat = (_: number, index: number) =>
    index === 0 ? `C1` : `C2 `;

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      {data && (
        <>
          <Slider
            classes={{
              valueLabel: classes.sliderLabel,
            }}
            className={clsx(classes.sliderRoot, {
              [classes.sliderRootShift]: open,
            })}
            value={sliderValues}
            valueLabelDisplay="on"
            aria-labelledby="range-slider"
            onChange={handleChangeSlider}
            valueLabelFormat={handleValueLabelFormat}
            track="inverted"
            min={0}
            max={data.labels.length}
          />
          <Line type="line" data={data} options={OPTIONS} height={100} />
        </>
      )}
    </main>
  );
};
