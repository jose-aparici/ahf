import {
  DeviceInfoAhf,
  DeviceStructureAhf,
} from 'domain/ahf-device/ahf-device.types';
import { ParamReadAhf } from 'domain/ahf-param/ahf-param.types';
import { Command } from 'domain/ahf/ahf.types';

export type Action = {
  type: Command;
  payload: Payload;
};

export type Payload = DeviceInfoAhf | DeviceStructureAhf | ParamReadAhf;
