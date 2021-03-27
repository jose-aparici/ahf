import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import { AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';
import { Folder } from 'domain/folder/folder.types';

//TODO improve this
export type Action = {
  type: AhfCommand | 'FOLDER_CHANGE';
  payload: AhfPayload | Folder;
};

export type Payload = AhfParamRead;
