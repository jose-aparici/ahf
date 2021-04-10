import { Folder } from 'domain/folder/folder.types';

export type Resource = {
  folder: Folder;
  currentParamIndex: number | undefined;
};
