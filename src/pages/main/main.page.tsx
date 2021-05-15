import { AhfContext } from 'contexts/store/context';
import React, { useContext } from 'react';

import { AhfPage } from 'pages/ahf.page';

export const AhfMainPage: React.FC = () => {
  const { state } = useContext(AhfContext);

  return (
    <AhfPage>
      {state.initialDevice > -1 ? (
        <div>main page {state.initialDevice}</div>
      ) : (
        <div>loading</div>
      )}
    </AhfPage>
  );
};
