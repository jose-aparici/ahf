import { Param } from 'domain/param/param.types';

//TODO rename to device folder
export interface Device {
  info: DeviceInfo;
  structure: DeviceNode;
}

export interface DeviceInfo {
  company: string;
  fw: string;
  id: number;
  status: number;
  type: string;
}

export type DeviceNode = {
  id: string;
  label: string;
  children: DeviceNode[];
  params: Param[];
};
