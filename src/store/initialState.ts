

import { Device } from 'domain/device/device.types';

export interface State {
  devices: Record<number, Device>;
}
export const initialState: State = {
  devices: {},
};
