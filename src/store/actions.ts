import {
  AhfDeviceInfo,
  AhfDeviceStructure,
} from 'domain/ahf-device/ahf-device.types';
import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import { AhfCommand } from 'domain/ahf/ahf.types';

export type Action = {
  type: AhfCommand;
  payload: Payload;
};

export type Payload = AhfDeviceInfo | AhfDeviceStructure | AhfParamRead;
