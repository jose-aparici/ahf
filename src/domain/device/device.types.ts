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
}

export enum DeviceType {
  AHF_SYNC_MODULE = 'AHF Sync Module',
  ACTIVE_HARMONIC_FILER = 'Active Harmonic Filter',
}
