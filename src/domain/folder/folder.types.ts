import { Param } from 'domain/param/param.types';

export interface FolderParams {
  ParData: Array<Param>;
}

export interface FolderSelect {
  Device: string;
  Folder?: string;
}
