import {
  AhfDeviceInfo,
  AhfDeviceStructure,
} from 'domain/ahf-device/ahf-device.types';
import { AhfEvent, AhfEventLogFiles } from 'domain/ahf-event/ahf-event.types';
import { AhfNotification } from 'domain/ahf-notification/ahf-notification.types';
import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import { AhfCommand } from 'domain/ahf/ahf.types';
import { AppCommand, AppPayload } from 'domain/app/app.types';

export type Action = {
  type: AhfCommand | AppCommand;
  payload: Payload | AppPayload;
};

export type Payload =
  | AhfDeviceInfo
  | AhfDeviceStructure
  | AhfParamRead
  | AhfEvent
  | AhfEventLogFiles
  | AhfNotification;
