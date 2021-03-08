import { Param } from 'domain/param/param.types';

export interface Device {
  info: DeviceInfo;
  structure: DeviceNode;
}

export interface DeviceAhf {
  info: DeviceInfo;
  structure: DeviceStructure;
}

export type DeviceNode = {
  id: string;
  label: string;
  children: DeviceNode[];
  params: Param[];
};

export type Params = {
  ParData: Array<Param>;
};

export type Folder = {
  Folders: FolderData;
  Params: Params | null;
};

export type FolderData = Record<string, Folder>;

export interface DeviceStructure {
  DeviceID: number;
  FolderNames: Array<string>;
  FolderData: Record<string, Folder>;
}

export interface DeviceInfo {
  Company: string;
  FW: string;
  ID: number;
  Status: number;
  Type: string;
}
