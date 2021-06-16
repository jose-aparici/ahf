import { AhfContext } from 'contexts/store/context';
import React, { useContext, useEffect, useState } from 'react';

import { Channel } from 'domain/oscilloscope/oscilloscope.types';

import { AhfSideBarContainer } from './side-bar/side-bar.container';
import { AhfTopButtonsComponent } from './top-buttons/top-buttons.component';

export const AhfOScilloscopeContainer: React.FC = () => {
  const { state } = useContext(AhfContext);

  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {
    setChannels([...state.oscilloscope.settings.channels]);
  }, [state.oscilloscope.settings.channels]);

  return (
    <>
      <AhfTopButtonsComponent />
      <AhfSideBarContainer channels={channels} />
    </>
  );
};
