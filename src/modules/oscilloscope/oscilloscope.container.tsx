import React from 'react';

import { AhfSideBarContainer } from './side-bar/side-bar.container';
import { AhfTopButtonsComponent } from './top-buttons/top-buttons.component';

export const AhfOScilloscopeContainer: React.FC = () => {
  return (
    <>
      <AhfTopButtonsComponent />
      <AhfSideBarContainer />
    </>
  );
};
