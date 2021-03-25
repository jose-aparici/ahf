import { Folder } from 'domain/folder/folder.types';

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
