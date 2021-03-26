import { Param } from 'domain/param/param.types';

export type Folder = {
  id: string;
  label: string;
  children: Folder[];
  params: Param[];
};
