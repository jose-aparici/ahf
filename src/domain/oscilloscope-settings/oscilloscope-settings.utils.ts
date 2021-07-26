import { AhfStatus } from 'domain/ahf-oscilloscope-settings/ahf-oscilloscope-settings';

import { Status } from './oscilloscope-settings.types';

export const transformAhfStatusToStatus = (ahfStatus: AhfStatus): Status => {
  const mapperObject: Record<string, Status> = {
    Iddle: Status.iddle,
    Start: Status.start,
    WaitingForTrigger: Status.waitingForTrigger,
    TriggerFound: Status.triggerFound,
    Recording: Status.recording,
    DataReady: Status.dataReady,
    SettingsReady: Status.settingsReady,
  };

  return mapperObject[ahfStatus] as Status;
};
