import { DeviceInfo } from 'domain/ahf-device/ahf-device.types';
import { Param } from 'domain/param/param.types';

export interface Device {
  info: DeviceInfo;
  structure: DeviceNode;
}

export type DeviceNode = {
  id: string;
  label: string;
  children: DeviceNode[];
  params: Param[];
};
