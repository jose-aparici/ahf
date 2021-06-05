import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import { AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';
import { AppCommand, AppPayload } from 'domain/app/app.types';
import { Resource } from 'domain/resource/resource.type';

import { RESOURCE_CHANGE } from './types';

export type Action = {
  type: AhfCommand | AppCommand | RESOURCE_CHANGE;
  payload: AhfPayload | AppPayload | Resource;
};

export type Payload = AhfParamRead;
