import { ParamReadAhf } from 'domain/ahf-param/ahf-param.types';
import { AhfPayload, Command } from 'domain/ahf/ahf.types';

export type Action = {
  type: Command;
  payload: AhfPayload;
};

export type Payload = ParamReadAhf;
