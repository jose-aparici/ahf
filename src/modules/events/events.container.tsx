import React from 'react';

import { AhfSideBarContainer } from './side-bar/side-bar.container';
import { AhfTableComponent } from './table/table.component';

export const AhfEventsContainer: React.FC = () => {
  return (
    <>
      <AhfTableComponent rows={[]} />
      <AhfSideBarContainer />
    </>
  );
};
