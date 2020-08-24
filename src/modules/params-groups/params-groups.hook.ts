import { Observable } from 'rxjs';

import { getParamsGroup } from 'api/params-group.api';
import { ParamsGroup } from 'domain/params-group/params-group.type';

interface ParamsGroupsHook {
  retrieveParamsGroupsData: () => Observable<Array<ParamsGroup>>;
}

const retrieveParamsGroupsData = (): Observable<Array<ParamsGroup>> =>
  getParamsGroup();

export const useParamsGroups = (): ParamsGroupsHook => {
  return {
    retrieveParamsGroupsData,
  };
};
