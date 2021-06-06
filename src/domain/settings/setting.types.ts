import { Folder } from 'domain/folder/folder.types';

export type Tab = {
  index: number;
  label: string;
};

export interface Settings {
  structure: Folder;
}
