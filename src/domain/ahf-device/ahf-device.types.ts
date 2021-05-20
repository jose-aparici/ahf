import { AhfFolder } from 'domain/ahf-folder/ahf-folder.types';

export interface AhfDevice {
  info: AhfDeviceInfo;
  structure: AhfDeviceStructure;
}

export interface AhfDeviceInfo {
  Company: string;
  FW: string;
  ID: number;
  Status: number;
  Type: AhfDeviceType;
  TypeName: string;
}

export interface AhfDeviceStructure {
  DeviceID: number;
  FolderNames: Array<string>;
  FolderData: Record<string, AhfFolder>;
}

export enum AhfDeviceType {
  AHF_SYNC_MODULE = 1,
  ACTIVE_HARMONIC_FILER = 2,
  HMI_DEVICE = 3,
}
