import { DeviceNodes } from 'domain/device/device.types';

export interface State {
  devices: Record<number, DeviceNodes>;
}
export const initialState: State = {
  devices: {},
};
