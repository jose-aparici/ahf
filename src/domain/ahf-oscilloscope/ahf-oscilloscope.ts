export interface AhfOscilloscopeData {
  XAxis: {
    XFreq: number[];
    XTime: number[];
  };
  YAxis: {
    CH1: ChannelData;
    CH2: ChannelData;
    CH3: ChannelData;
    CH4: ChannelData;
    CH5: ChannelData;
    CH6: ChannelData;
  };
}

export type ChannelData = {
  Time: number[];
  Freq: number[];
};
