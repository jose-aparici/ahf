import React from 'react';

import { AhfMainContainer } from 'modules/main/main.container';
import { AhfPage } from 'pages/ahf.page';

export const AhfMainPage: React.FC = () => {
  return (
    <AhfPage>
      <AhfMainContainer />
    </AhfPage>
  );
};
