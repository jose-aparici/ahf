import { Param } from 'domain/param/param.types';

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
  root: boolean;
};
