import { Settings } from 'domain/oscilloscope-settings/oscilloscope-settings.types';

export interface Oscilloscope {
  settings: Settings;
  data?: Data;
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
