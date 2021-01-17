import { FolderParams } from 'domain/folder/folder.types';

export interface Device {
  info: DeviceInfo;
  structure: DeviceStructure;
}

export type FolderData = Record<string, FolderParams>;

export interface DeviceStructure {
  DeviceID: number;
  FolderNames: Array<string>;
  FolderData: FolderData;
}

export interface DeviceInfo {
  Company: string;
  FW: string;
  ID: number;
  Status: number;
  Type: string;
}
