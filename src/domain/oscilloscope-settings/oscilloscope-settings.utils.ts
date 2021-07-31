import { AhfStatus } from 'domain/ahf-oscilloscope-settings/ahf-oscilloscope-settings';
import { Folder } from 'domain/folder/folder.types';
import {
  findFolderById,
  getParamsFromFolder,
} from 'domain/folder/folder.utils';
import { Param } from 'domain/param/param.types';

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

export const getParamsByDeviceId = (
  rootFolder: Folder,
  folderId: string,
): Param[] | undefined => {
  const folder = findFolderById(rootFolder, folderId);

  if (folder) {
    return getParamsFromFolder(folder, []);
  } else {
    return undefined;
  }
};
