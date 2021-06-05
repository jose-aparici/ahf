import { Param } from 'domain/param/param.types';

export type Folder = {
  id: string;
  label: string[];
  deviceId: string;
  isMainFolder: boolean;
  children: Folder[];
  params: Param[];
};
