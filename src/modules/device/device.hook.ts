import { Observable } from 'rxjs';

import { getParamsGroups } from 'api/params-groups.api';
import { ParamsGroup } from 'domain/device/params-group.type';

interface DeviceHook {
  retrieveParamsGroupsData: () => Observable<Array<ParamsGroup>>;
}

const retrieveParamsGroupsData = (): Observable<Array<ParamsGroup>> =>
  getParamsGroups();

export const useDevice = (): DeviceHook => {
  return {
    retrieveParamsGroupsData,
  };
};
