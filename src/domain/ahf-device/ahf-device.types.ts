import { FolderAhf } from 'domain/ahf-folder/ahf-folder.types';
import { ParamAhf } from 'domain/ahf-param/ahf-param.types';

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
  ParData: Array<ParamAhf>;
};
