import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import { AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';
import { Resource } from 'domain/resource/resource.type';

import { Param } from '../../../domain/param/param.types';
import { PARAM_DETAIL, RESOURCE_CHANGE } from './types';

//TODO improve this
export type Action = {
  type: AhfCommand | RESOURCE_CHANGE | PARAM_DETAIL;
  payload: AhfPayload | Resource | Param;
};

export type Payload = AhfParamRead;
