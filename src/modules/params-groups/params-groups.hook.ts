import { Observable } from 'rxjs';

import { getParamsGroups } from 'api/params-groups.api';
import { ParamsGroup } from 'domain/params-group/params-group.type';

interface ParamsGroupsHook {
  retrieveParamsGroupsData: () => Observable<Array<ParamsGroup>>;
}

const retrieveParamsGroupsData = (): Observable<Array<ParamsGroup>> =>
  getParamsGroups();

export const useParamsGroups = (): ParamsGroupsHook => {
  return {
    retrieveParamsGroupsData,
  };
};
