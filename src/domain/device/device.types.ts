import { Param } from 'domain/param/param.types';

export interface Device {
  info: DeviceInfo;
  structure: DeviceStructure;
}

export type Params = {
  ParData: Array<Param>;
};

export type Folder = {
  Folders: FolderData;
  Params: Params;
};

export type FolderData = Record<string, Folder>;

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
