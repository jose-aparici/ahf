import { Chart } from 'domain/chart/chart.types';
import {
  Settings,
  Status,
} from 'domain/oscilloscope-settings/oscilloscope-settings.types';

export interface Oscilloscope {
  settings: Settings;
  status: Status;
  chart?: Chart;
}

export interface Data {
  xAxis: {
    xFreq: number[];
    xTime: number[];
  };
  yAxis: {
    channels: ChannelData[];
  };
}

export type ChannelData = {
  time: number[];
  freq: number[];
};
