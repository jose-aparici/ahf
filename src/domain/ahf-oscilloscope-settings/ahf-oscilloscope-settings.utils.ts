import {
  OscilloscopeMode,
  Settings,
} from 'domain/oscilloscope-settings/oscilloscope-settings.types';

import {
  AhfOscilloscopeMode,
  AhfOscilloscopeSettings,
} from './ahf-oscilloscope-settings';

export const transformSettingsToAhfSettings = (
  settings: Settings,
): AhfOscilloscopeSettings => {
  return {
    Ch1: settings.channels[0].id,
    Ch2: settings.channels[1].id,
    Ch3: settings.channels[2].id,
    Ch4: settings.channels[3].id,
    Ch5: settings.channels[4].id,
    Ch6: settings.channels[5].id,
    TriggerSignal: settings.trigger.id,
    TriggerLevel: settings.triggerLevel,
    TriggerMode: settings.triggerMode,
    Delay: settings.delay,
    SamplingPeriod: settings.samplePeriod,
    Mode:
      settings.mode === OscilloscopeMode.SINGLE
        ? AhfOscilloscopeMode.SINGLE
        : AhfOscilloscopeMode.CONTINUOUS,
  };
};
