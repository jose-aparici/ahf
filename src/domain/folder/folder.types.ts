import { ParamAhf } from 'domain/ahf-param/ahf-param.types';

export type Folder = {
  id: string;
  label: string;
  children: Folder[];
  params: ParamAhf[];
};
