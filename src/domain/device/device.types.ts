import { Param } from 'domain/param/param.types';

//TODO rename to device folder
export interface Device {
  info: DeviceInfo;
  structure: Folder;
}

export interface DeviceInfo {
  company: string;
  fw: string;
  id: number;
  status: number;
  type: string;
}

export type Folder = {
  id: string;
  label: string;
  children: Folder[];
  params: Param[];
};
