import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AhfContext } from 'store/context';

import { Param } from 'domain/param/param.types';
import { findParamById } from 'domain/param/param.utils';
import { AhfParamContainer } from 'modules/param/param.container';
import { AhFPage } from 'pages/ahf.page';

interface ParamTypes {
  deviceId: string;
  folderId: string;
  paramId: string;
}

export const AhfParamPage: React.FC = () => {
  const { state } = useContext(AhfContext);
  const [param, setParam] = useState<Param>();
  const { deviceId, folderId, paramId } = useParams<ParamTypes>();

  useEffect(() => {
    if (state.devices[+deviceId] && state.devices[+deviceId].structure) {
      const param = findParamById(
        state.devices[+deviceId].structure,
        folderId,
        paramId,
      );
      setParam(param);
    }
  }, [deviceId, folderId, paramId, state]);

  return (
    <>
      {param && (
        <AhFPage>
          <AhfParamContainer param={param} />
        </AhFPage>
      )}
    </>
  );
};
