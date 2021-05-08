import React from 'react';

import { AhfSettingsContainer } from 'modules/settings/settings.container';
import { AhfPage } from 'pages/ahf.page';

export const AhfSettingsPage: React.FC = () => {
  return (
    <AhfPage>
      <AhfSettingsContainer />
    </AhfPage>
  );
};
