import {
  Command,
  DeviceInfo,
  DeviceParamUpdate,
  DeviceStructure,
} from 'domain/ahf/ahf.types';

export type Action = {
  type: Command;
  payload: Payload;
};

export type Payload = DeviceInfo | DeviceStructure | DeviceParamUpdate;
