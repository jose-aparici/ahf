import { Command } from 'domain/ahf/ahf.types';
import { DeviceInfo, DeviceStructure } from 'domain/device/device.types';
import { ParamRead } from 'domain/param/param.types';

export type Action = {
  type: Command;
  payload: Payload;
};

export type Payload = DeviceInfo | DeviceStructure | ParamRead;
