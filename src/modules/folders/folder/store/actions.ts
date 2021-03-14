import { AhfPayload, Command } from 'domain/ahf/ahf.types';
import { ParamRead } from 'domain/param/param.types';

export type Action = {
  type: Command;
  payload: AhfPayload;
};

export type Payload = ParamRead;
