import { AhfParamRead } from 'domain/ahf-param/ahf-param.types';
import { AhfCommand, AhfPayload } from 'domain/ahf/ahf.types';

export type Action = {
  type: AhfCommand;
  payload: AhfPayload;
};

export type Payload = AhfParamRead;
