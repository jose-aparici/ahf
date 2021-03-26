import { ParamsAhf } from 'domain/ahf-device/ahf-device.types';
import { ParamAhf } from 'domain/ahf-param/ahf-param.types';

export type FolderAhf = {
  Folders: FolderDataAhf;
  Params: ParamsAhf | null;
};
export interface FolderParamsAhf {
  ParData: Array<ParamAhf>;
}
export interface FolderSelectAhf {
  Device: string;
  Folder?: string;
}

export type FolderDataAhf = Record<string, FolderAhf>;
