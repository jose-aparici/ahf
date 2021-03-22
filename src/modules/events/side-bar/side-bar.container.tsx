import React, { useState } from 'react';

import { AhfSideBarComponent } from './components/side-bar.component';

export const AhfSideBarContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSideBar = (open: boolean): void => setIsOpen(!open);

  return (
    <AhfSideBarComponent
      onToggleSideBar={handleToggleSideBar}
      isOpen={isOpen}
    ></AhfSideBarComponent>
  );
};
