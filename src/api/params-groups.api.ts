import { Observable, of } from 'rxjs';

import { ParamsGroup } from 'domain/params-group/params-group.type';

export const getParamsGroups = (): Observable<Array<ParamsGroup>> =>
  of([
    {
      params: [
        { title: 'title1.1', description: 'description1.1' },
        { title: 'title1.2', description: 'description1.2' },
        { title: 'title1.3', description: 'description1.3' },
        { title: 'title1.1', description: 'description1.1' },
        { title: 'title1.2', description: 'description1.2' },
      ],
    },
    {
      params: [
        { title: 'title2.1', description: 'description2.1' },
        { title: 'title2.2', description: 'description2.2' },
        { title: 'title2.3', description: 'description2.3' },
      ],
    },
    {
      params: [
        { title: 'title3.1', description: 'description3.1' },
        { title: 'title3.2', description: 'description3.2' },
        { title: 'title3.3', description: 'description3.3' },
      ],
    },
  ]);
