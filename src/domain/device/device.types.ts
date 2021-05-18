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
  type: DeviceType;
  typeName: string;
}

export enum DeviceType {
  AHF_SYNC_MODULE = 1,
  ACTIVE_HARMONIC_FILER = 2,
  HMI_DEVICE = 3,
}
