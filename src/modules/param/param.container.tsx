import React, { useContext, useEffect, useState } from 'react';
import { AhfContext } from 'store/context';

import { Param } from 'domain/param/param.types';
import { findParamById } from 'domain/param/param.utils';

import { AhfParamDetailComponent } from './param-detail/param.component';

interface Props {
  deviceId: string;
  folderId: string;
  paramId: string;
}

export const AhfParamContainer: React.FC<Props> = ({
  deviceId,
  folderId,
  paramId,
}: Props) => {
  const { state } = useContext(AhfContext);
  const [param, setParam] = useState<Param>();

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
        <AhfParamDetailComponent param={param}></AhfParamDetailComponent>
      )}
    </>
  );
};
