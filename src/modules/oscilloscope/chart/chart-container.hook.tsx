import { AhfBackdropContext } from 'contexts/backdrop/context';
import { AhfContext } from 'contexts/store/context';
import { useCallback, useContext, useEffect, useState } from 'react';

import { Data, Dataset } from 'domain/chart/chart.types';
import {
  Channel,
  OscilloscopeMode,
} from 'domain/oscilloscope-settings/oscilloscope-settings.types';
import { Colors } from 'domain/oscilloscope/oscilloscope.constants';
import { ChannelData } from 'domain/oscilloscope/oscilloscope.types';

interface ChartContainerHook {
  data: Data;
}

export const useChartContainer = (): ChartContainerHook => {
  const { state } = useContext(AhfContext);
  const [data, setData] = useState<Data>();
  const { closeBackdrop, openBackdrop } = useContext(AhfBackdropContext);

  useEffect(() => {
    openBackdrop(false);
  }, [openBackdrop]);

  const buildDataSets = useCallback(
    (
      channelsData: ChannelData[],
      channels: Channel[],
      mode: OscilloscopeMode,
    ): Dataset[] => {
      const datasets = channelsData.map((channel, index) => {
        if (channels[index].selected === true) {
          return {
            data:
              mode === OscilloscopeMode.CONTINUOUS_TIME
                ? channel.time
                : channel.freq,
            fill: false,
            backgroundColor: Colors[index],
            borderColor: Colors[index],
            label: `${index}_${channels[index].id.toString()}`,
            tension: 0.4,
            borderWidth: 1,
            radius: 0,
          } as Dataset;
        } else {
          return {};
        }
      });

      return datasets ? (datasets as Dataset[]) : [];
    },
    [],
  );

  useEffect(() => {
    if (state.oscilloscope.data) {
      const data: Data = {
        labels: state.oscilloscope.data?.xAxis[
          state.oscilloscope.settings.mode === OscilloscopeMode.CONTINUOUS_TIME
            ? 'xTime'
            : 'xFreq'
        ].map(() => ''),
        datasets: buildDataSets(
          state.oscilloscope.data.yAxis.channels,
          state.oscilloscope.settings.channels,
          state.oscilloscope.settings.mode,
        ),
      };

      closeBackdrop();
      return setData(data);
    }
  }, [
    state.oscilloscope.data,
    state.oscilloscope.settings,
    closeBackdrop,
    buildDataSets,
  ]);

  if (data !== undefined) {
    return { data };
  } else {
    return { data: { labels: [], datasets: [] } };
  }
};
