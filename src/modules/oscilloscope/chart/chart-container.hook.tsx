import { AhfBackdropContext } from 'contexts/backdrop/context';
import { AhfContext } from 'contexts/store/context';
import { useContext, useEffect, useState } from 'react';

import { Data } from 'domain/chart/chart.types';
import { OscilloscopeMode } from 'domain/oscilloscope-settings/oscilloscope-settings.types';
import { Colors } from 'domain/oscilloscope/oscilloscope.constants';

interface ChartContainerHook {
  data: Data | undefined;
}

export const useChartContainer = (): ChartContainerHook => {
  const { state } = useContext(AhfContext);
  const [data, setData] = useState<Data>();
  const { closeBackdrop, openBackdrop } = useContext(AhfBackdropContext);

  useEffect(() => {
    openBackdrop(false);
  }, [openBackdrop]);

  useEffect(() => {
    if (state.oscilloscope.data) {
      if (
        state.oscilloscope.settings.mode === OscilloscopeMode.CONTINUOUS_TIME
      ) {
        const data: Data = {
          labels: state.oscilloscope.data?.xAxis.xTime.map((label) =>
            label.toString(),
          ),
          datasets: state.oscilloscope.data.yAxis.channels.map(
            (channel, index) => {
              return {
                data: channel.time,
                fill: false,
                backgroundColor: Colors[index],
                borderColor: Colors[index],
              };
            },
          ),
        };
        closeBackdrop();
        return setData(data);
      } else {
        const data: Data = {
          labels: state.oscilloscope.data?.xAxis.xFreq.map((label) =>
            label.toString(),
          ),
          datasets: state.oscilloscope.data.yAxis.channels.map((channel) => {
            return {
              data: channel.freq,
              fill: false,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgba(255, 99, 132, 0.2)',
            };
          }),
        };
        closeBackdrop();
        return setData(data);
      }
    }
  }, [
    state.oscilloscope.data,
    state.oscilloscope.settings.mode,
    closeBackdrop,
  ]);

  return { data };
};
