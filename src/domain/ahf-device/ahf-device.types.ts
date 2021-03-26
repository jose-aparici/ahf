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
  Type: string;
}

export interface AhfDeviceStructure {
  DeviceID: number;
  FolderNames: Array<string>;
  FolderData: Record<string, AhfFolder>;
}
