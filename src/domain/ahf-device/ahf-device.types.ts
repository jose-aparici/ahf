import { AhfFolder } from 'domain/ahf-folder/ahf-folder.types';
import { AhfParam } from 'domain/ahf-param/ahf-param.types';

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

export type AhfParams = {
  ParData: Array<AhfParam>;
};
