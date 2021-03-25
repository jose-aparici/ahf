import { Param } from 'domain/param/param.types';

export interface DeviceAhf {
  info: DeviceInfoAhf;
  structure: DeviceStructureAhf;
}

export interface DeviceInfoAhf {
  Company: string;
  FW: string;
  ID: number;
  Status: number;
  Type: string;
}

export interface DeviceStructureAhf {
  DeviceID: number;
  FolderNames: Array<string>;
  FolderData: Record<string, FolderAhf>;
}

export type ParamsAhf = {
  ParData: Array<Param>;
};

export type FolderAhf = {
  Folders: FolderData;
  Params: ParamsAhf | null;
};

export type FolderData = Record<string, FolderAhf>;
