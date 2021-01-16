import { FolderParams } from 'domain/folder/folder.types';

export interface Device {
  info: DeviceInfo;
  structure: DeviceStructure;
}

export interface DeviceStructure {
  DeviceID: number;
  FolderNames: Array<string>;
  FolderData: Record<string, FolderParams>;
}

export interface DeviceInfo {
  Company: string;
  FW: string;
  ID: number;
  Status: number;
  Type: string;
}
