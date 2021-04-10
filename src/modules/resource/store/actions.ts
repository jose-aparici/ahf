import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import { AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';
import { Resource } from 'domain/resource/resource.type';

import { RESOURCE_CHANGE } from './types';

export type Action = {
  type: AhfCommand | RESOURCE_CHANGE;
  payload: AhfPayload | Resource;
};

export type Payload = AhfParamRead;
