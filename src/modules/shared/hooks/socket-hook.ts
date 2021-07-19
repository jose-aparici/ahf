import { Dispatch, useCallback } from 'react';
import { Subscription } from 'rxjs';

import { AhfLog } from 'domain/ahf-event/ahf-event.types';
import { transformSettingsToAhfSettings } from 'domain/ahf-oscilloscope-settings/ahf-oscilloscope-settings.utils';
import { AhfSettingsAdminFile } from 'domain/ahf-settings-admin/ahf-settings-admin.types';
import { AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';
import { Action } from 'domain/app/app.types';
import { Settings } from 'domain/oscilloscope-settings/oscilloscope-settings.types';
import { Param } from 'domain/param/param.types';
import { AhfSocket } from 'services/ahf-socket/ahf-socket.service';

interface SocketHook {
  init: () => void;
  listen: (dispatch: Dispatch<Action>) => Subscription;
  scan: () => void;
  readIniFile: (deviceId: string) => void;
  update: (deviceId: string, folderId: string) => void;
  stopUpdate: () => void;
  writeParam: (param: Param) => void;
  readEvents: (len: string) => void;
  readEventLogFiles: () => void;
  readEventLogFromFile: (fileName: string) => void;
  writeEvents: (logs: AhfLog[], fileName: string) => void;
  readParameterSetList: () => void;
  readParameterSetFile: (fileName: string) => void;
  writeParameterSetFile: (settingsAdminFile: AhfSettingsAdminFile) => void;
  readOscilloscopeSetttings: (settings: Settings) => void;
  readOscilloscopeStatus: () => void;
}

export const useSocketHook = (): SocketHook => {
  const init = useCallback((): void => {
    AhfSocket.getInstance();
  }, []);

  const listen = useCallback((dispatch: Dispatch<Action>): Subscription => {
    return AhfSocket.getInstance()
      .asObservable()
      .subscribe((data) => {
        dispatch({
          type: data.Cmd as AhfCommand,
          payload: data.Data as AhfPayload,
        });
      });
  }, []);

  const scan = useCallback((): void => {
    AhfSocket.getInstance().next({ Cmd: AhfCommand.SCAN });
  }, []);

  const readIniFile = useCallback((deviceId: string): void => {
    AhfSocket.getInstance().next({
      Cmd: AhfCommand.READ_INI_FILE,
      Data: { Device: deviceId },
    });
  }, []);

  const update = useCallback((deviceId: string, folderId: string) => {
    AhfSocket.getInstance().next({
      Cmd: AhfCommand.FOLDER_SELECT,
      Data: { Device: deviceId, Folder: folderId },
    });
  }, []);

  const stopUpdate = useCallback(() => {
    AhfSocket.getInstance().next({
      Cmd: AhfCommand.FOLDER_SELECT,
      Data: { Device: '0', Folder: '0' },
    });
  }, []);

  const writeParam = useCallback((param: Param) => {
    param.read &&
      param.value !== undefined &&
      AhfSocket.getInstance().next({
        Cmd: AhfCommand.PARAM_DETAIL,
        Data: {
          DeviceID: param.read.deviceId,
          FolderName: param.read.folderName,
          Marker: param.read.marker,
          ParamID: param.paramId,
          ParamPos: param.read.paramPos,
          Value: param.value,
        },
      });
  }, []);

  const readEvents = useCallback((len: string) => {
    AhfSocket.getInstance().next({
      Cmd: AhfCommand.READ_EVENTS,
      Data: { Len: len },
    });
  }, []);

  const readEventLogFiles = useCallback(() => {
    AhfSocket.getInstance().next({
      Cmd: AhfCommand.EVENT_LOG_FILES,
      Data: { Len: '512' },
    });
  }, []);

  const readEventLogFromFile = useCallback((fileName: string) => {
    AhfSocket.getInstance().next({
      Cmd: AhfCommand.READ_EVENT_LOG_FROM_FILE,
      Data: { FileName: fileName },
    });
  }, []);

  const writeEvents = useCallback((logs: AhfLog[], fileName: string) => {
    AhfSocket.getInstance().next({
      Cmd: AhfCommand.WRITE_EVENTS,
      Data: {
        EventLog: {
          Entries: logs,
        },
        FileName: fileName,
      },
    });
  }, []);

  const readParameterSetList = useCallback(() => {
    AhfSocket.getInstance().next({
      Cmd: AhfCommand.READ_PARAMETER_SET_LIST,
      Data: '',
    });
  }, []);

  const readParameterSetFile = useCallback((fileName: string) => {
    AhfSocket.getInstance().next({
      Cmd: AhfCommand.READ_PARAMETER_SET_FILE,
      Data: { FileName: fileName },
    });
  }, []);

  const writeParameterSetFile = useCallback(
    (settingsAdminFile: AhfSettingsAdminFile) => {
      AhfSocket.getInstance().next({
        Cmd: AhfCommand.WRITE_PARAMETER_SET_FILE,
        Data: settingsAdminFile,
      });
    },
    [],
  );

  const readOscilloscopeSetttings = useCallback((settings: Settings) => {
    const ahfSettings = transformSettingsToAhfSettings(settings);
    AhfSocket.getInstance().next({
      Cmd: AhfCommand.READ_OSCILLOSCOPE_SETTINGS,
      Data: ahfSettings,
    });
  }, []);

  const readOscilloscopeStatus = useCallback(() => {
    AhfSocket.getInstance().next({
      Cmd: AhfCommand.READ_OSCILLOSCOPE_STATUS,
      Data: '',
    });
  }, []);

  return {
    init,
    listen,
    scan,
    readIniFile,
    update,
    stopUpdate,
    writeParam,
    readEvents,
    readEventLogFiles,
    readEventLogFromFile,
    writeEvents,
    readParameterSetList,
    readParameterSetFile,
    writeParameterSetFile,
    readOscilloscopeSetttings,
    readOscilloscopeStatus,
  };
};
