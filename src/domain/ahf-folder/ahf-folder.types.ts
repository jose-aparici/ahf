import { AhfParams } from 'domain/ahf-param/ahf-param.types';

export type AhfFolder = {
  Folders: AhfFolderData;
  Params: AhfParams | null;
};

export interface AhfFolderSelect {
  Device: string;
  Folder?: string;
}

export type AhfFolderData = Record<string, AhfFolder>;
