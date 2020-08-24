import React from 'react';

import { AhfParamsGroupsContainer } from 'modules/params-groups/params-groups.container';
import { AhFPage } from 'pages/ahf.page';

export const AhfParamsGroupsPage: React.FC = () => {
  return (
    <AhFPage>
      <AhfParamsGroupsContainer />
    </AhFPage>
  );
};
