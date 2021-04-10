import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import { AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';
import { Folder } from 'domain/folder/folder.types';

import { Param } from '../../../domain/param/param.types';
import { FOLDER_CHANGE, PARAM_DETAIL } from './types';

//TODO improve this
export type Action = {
  type: AhfCommand | FOLDER_CHANGE | PARAM_DETAIL;
  payload: AhfPayload | Folder | Param;
};

export type Payload = AhfParamRead;
