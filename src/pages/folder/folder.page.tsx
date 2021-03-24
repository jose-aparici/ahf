import React from 'react';

import { AhfFolderContainer } from 'modules/folder/folder.container';
import { AhfFolderProvider } from 'modules/folder/store/context';
import { AhfPage } from 'pages/ahf.page';

export const AhfFolderPage: React.FC = () => (
  <AhfPage>
    <AhfFolderProvider>
      <AhfFolderContainer />
    </AhfFolderProvider>
  </AhfPage>
);
