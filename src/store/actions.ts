import {
  DeviceInfoAhf,
  DeviceStructureAhf,
} from 'domain/ahf-device/ahf-device.types';
import { Command } from 'domain/ahf/ahf.types';
import { ParamRead } from 'domain/param/param.types';

export type Action = {
  type: Command;
  payload: Payload;
};

export type Payload = DeviceInfoAhf | DeviceStructureAhf | ParamRead;
