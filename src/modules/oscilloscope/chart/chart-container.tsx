import 'chartjs-plugin-zoom';

import clsx from 'clsx';
import { AhfContext } from 'contexts/store/context';
import React, { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { Slider } from '@material-ui/core';

import { OPTIONS } from 'domain/chart/chart.constants';

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
  const { state } = useContext(AhfContext);
  const { chart, settings } = state.oscilloscope;
  const [sliderValues, setSliderValues] = useState<number[]>([0, 511]);
  const [data, setData] = useState(
    chart && settings ? chart[settings.mode] : undefined,
  );

  useEffect(() => {
    if (chart !== undefined && settings.mode !== undefined) {
      setData({
        labels: chart[settings.mode].labels,
        datasets: chart[settings.mode].datasets.filter(
          (_, index) => settings.channels[index].selected,
        ),
      });
    }
  }, [chart, settings.channels, settings.mode]);

  useEffect(() => {
    onSliderValuesChange(sliderValues);
  }, [onSliderValuesChange, sliderValues]);

  const handleChangeSlider = (
    event: React.ChangeEvent<unknown>,
    value: number | number[],
  ) => {
    const sliderValues = value as number[];
    setSliderValues(sliderValues);
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
            track="inverted"
            min={0}
            max={511}
          />
          <Line type="line" data={data} options={OPTIONS} height={100} />
        </>
      )}
    </main>
  );
};
