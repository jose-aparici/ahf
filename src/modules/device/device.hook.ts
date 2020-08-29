import { Observable } from 'rxjs';

import { getDeviceData } from 'api/device.api';
import { Device } from 'domain/device/device.types';

interface DeviceHook {
  retrieveDeviceData: () => Observable<Device>;
}

const retrieveDeviceData = (): Observable<Device> => getDeviceData();

export const useDevice = (): DeviceHook => {
  return {
    retrieveDeviceData,
  };
};
