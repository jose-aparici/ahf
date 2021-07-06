import { AhfContext } from 'contexts/store/context';
import { useContext, useEffect, useState } from 'react';

import { Data } from 'domain/chart/chart.types';
import { OscilloscopeMode } from 'domain/oscilloscope-settings/oscilloscope-settings.types';

interface ChartContainerHook {
  data: Data | undefined;
}

export const useChartContainer = (): ChartContainerHook => {
  const { state } = useContext(AhfContext);
  const [data, setData] = useState<Data>();

  useEffect(() => {
    if (state.oscilloscope.data) {
      if (
        state.oscilloscope.settings.mode === OscilloscopeMode.CONTINUOUS_TIME
      ) {
        const data: Data = {
          labels: state.oscilloscope.data?.xAxis.xTime.map((label) =>
            label.toString(),
          ),
          datasets: state.oscilloscope.data.yAxis.channels.map((channel) => {
            return {
              data: channel.time,
              fill: false,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgba(255, 99, 132, 0.2)',
            };
          }),
        };
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
        return setData(data);
      }
    }
  }, [state.oscilloscope.data, state.oscilloscope.settings.mode]);

  return { data };
};
