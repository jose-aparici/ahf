import React from 'react';

import { EventRow } from 'domain/events/events.type';

import { AhfSideBarContainer } from './side-bar/side-bar.container';
import { AhfTableComponent } from './table/table.component';

export const AhfEventsContainer: React.FC = () => {
  const rows: EventRow[] = [
    { type: 'warning', timestamp: 'timestamp1', message: 'mesasge1' },
    { type: 'warning', timestamp: 'timestamp2', message: 'mesasge2' },
    { type: 'warning', timestamp: 'timestamp3', message: 'mesasge3' },
    { type: 'warning', timestamp: 'timestamp4', message: 'mesasge4' },
    { type: 'warning', timestamp: 'timestamp5', message: 'mesasge5' },
    { type: 'warning', timestamp: 'timestamp5', message: 'mesasge5' },
    { type: 'warning', timestamp: 'timestamp5', message: 'mesasge5' },
    { type: 'warning', timestamp: 'timestamp5', message: 'mesasge5' },
    { type: 'warning', timestamp: 'timestamp5', message: 'mesasge5' },
    { type: 'warning', timestamp: 'timestamp5', message: 'mesasge5' },
  ];
  return (
    <>
      <AhfTableComponent rows={rows} />
      <AhfSideBarContainer />
    </>
  );
};
