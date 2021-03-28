import { buildDeviceAhf } from '__mocks__/buildDevice';

import { AhfDevice } from 'domain/ahf-device/ahf-device.types';
import { Device } from 'domain/device/device.types';

import { buildState } from './__mocks__/buildState';
import { deviceInfoReducer } from './reducer_device_info';
import { deviceStructureReducer } from './reducer_device_structure';

const deviceAhf: AhfDevice = buildDeviceAhf();

export interface State {
  devices: Record<number, Device>;
}

export const mockedState: State = deviceStructureReducer(
  deviceInfoReducer(buildState(), deviceAhf.info),
  deviceAhf.structure,
);

console.log(mockedState);

export const initialState: State = {
  devices: mockedState.devices,
};
