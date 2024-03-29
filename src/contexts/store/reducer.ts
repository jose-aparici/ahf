import {
  AhfDeviceInfo,
  AhfDeviceStructure,
} from 'domain/ahf-device/ahf-device.types';
import { AhfEvent } from 'domain/ahf-event/ahf-event.types';
import { AhfNotification } from 'domain/ahf-notification/ahf-notification.types';
import {
  AhfOscilloscopeSettings,
  AhfOscilloscopeStatus,
} from 'domain/ahf-oscilloscope-settings/ahf-oscilloscope-settings';
import { AhfOscilloscopeData } from 'domain/ahf-oscilloscope/ahf-oscilloscope';
import { AhfSettingsAdminFile } from 'domain/ahf-settings-admin/ahf-settings-admin.types';
import { AhfCommand } from 'domain/ahf/ahf.types';
import { Action, AppCommand } from 'domain/app/app.types';
import { Dataset } from 'domain/chart/chart.types';
import { EventLogFileName } from 'domain/event/events.type';
import { Notification, Severity } from 'domain/notification/notification.types';
import {
  OscilloscopeMode,
  OscilloscopeType,
} from 'domain/oscilloscope-settings/oscilloscope-settings.types';
import { transformAhfStatusToStatus } from 'domain/oscilloscope-settings/oscilloscope-settings.utils';
import { Colors } from 'domain/oscilloscope/oscilloscope.constants';
import { transformAhfCurrentFileToCurrentFile } from 'domain/settings-admin/settings-admin.utils';

import { OscilloscopeSettings } from '../../domain/oscilloscope-settings/oscilloscope-settings.types';
import { State } from './initialState';
import { deviceInfoReducer } from './reducer_device_info';
import { deviceStructureReducer } from './reducer_device_structure';
import { writeEventsReducer } from './reducer_write_events';

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case AhfCommand.DEVICE_INFO:
      return deviceInfoReducer(state, payload as AhfDeviceInfo);

    case AhfCommand.DEVICE_STRUCTURE:
      return deviceStructureReducer(state, payload as AhfDeviceStructure);

    case AhfCommand.WRITE_EVENTS:
      return writeEventsReducer(state, payload as AhfEvent);

    case AppCommand.CHANGE_EVENT_LOG_FILE_NAME: {
      state.eventLogs.fileName = payload as EventLogFileName;
      return { ...state };
    }

    case AppCommand.CLEAR_EVENT_LOGS: {
      state.eventLogs.logs = [];
      return { ...state };
    }

    case AhfCommand.DISPLAY_MESSAGE: {
      const notification = payload as AhfNotification;
      state.notification = {
        text: notification.Text,
        severity: notification.Severity as Severity,
      } as Notification;

      return { ...state };
    }

    case AhfCommand.SETTINGS_STRUCTURE: {
      return deviceStructureReducer(state, payload as AhfDeviceStructure);
    }

    case AhfCommand.WRITE_PARAMETER_SET_FILE: {
      const currentFile = transformAhfCurrentFileToCurrentFile(
        payload as AhfSettingsAdminFile,
      );
      return { ...state, settingsAdmin: { currentFile } };
    }

    case AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS: {
      state.oscilloscope.settings = payload as OscilloscopeSettings;
      return { ...state };
    }

    case AhfCommand.WRITE_OSCILLOSCOPE_SETTINGS: {
      const settings = payload as AhfOscilloscopeSettings;
      state.oscilloscope.settings = {
        channels: [
          { id: settings.Ch1 },
          { id: settings.Ch2 },
          { id: settings.Ch3 },
          { id: settings.Ch4 },
          { id: settings.Ch5 },
          { id: settings.Ch6 },
        ],
        deviceChannels: [],
        trigger: { id: settings.TriggerSignal },
        triggerLevel: settings.TriggerLevel,
        triggerMode: settings.TriggerMode,
        samplePeriod: settings.SamplingPeriod,
        delay: settings.Delay,
        mode:
          settings.Mode === 'Single'
            ? OscilloscopeMode.SINGLE
            : OscilloscopeMode.CONTINUOUS,
        type: OscilloscopeType.TIME,
      };
      return { ...state };
    }

    case AhfCommand.WRITE_OSCILLOSCOPE_DATA: {
      const data = payload as AhfOscilloscopeData;
      const timeDataSets: Dataset[] = [];
      const frequencyDataSets: Dataset[] = [];
      const { channels } = state.oscilloscope.settings;

      Object.values(data.YAxis).forEach((channelData, index) => {
        timeDataSets.push({
          label: `${index}_${channels[index].id.toString()}`,
          data: channelData.Time,
          fill: false,
          backgroundColor: Colors[index],
          borderColor: Colors[index],
          tension: 0.4,
          borderWidth: 1,
          radius: 0,
        });

        frequencyDataSets.push({
          label: `${index}_${channels[index].id.toString()}`,
          data: channelData.Freq,
          fill: false,
          backgroundColor: Colors[index],
          borderColor: Colors[index],
          tension: 0.4,
          borderWidth: 1,
          radius: 0,
        });
      });

      state.oscilloscope.chart = {
        0: {
          labels: data.XAxis.XTime.map((data) => data.toFixed(5).toString()),
          datasets: timeDataSets,
        },
        1: {
          labels: data.XAxis.XFreq.map((data) => data.toFixed(5).toString()),
          datasets: frequencyDataSets,
        },
      };

      return { ...state };
    }

    case AhfCommand.WRITE_OSCILLOSCOPE_STATUS: {
      const ahfOscilloscopeStatus = payload as AhfOscilloscopeStatus;
      state.oscilloscope.status = transformAhfStatusToStatus(
        ahfOscilloscopeStatus.Status,
      );
      return { ...state };
    }

    default:
      return state;
  }
};
