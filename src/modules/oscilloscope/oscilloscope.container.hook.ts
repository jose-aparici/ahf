import { AhfContext } from 'contexts/store/context';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  findFolderById,
  getParamsFromFolder,
} from 'domain/folder/folder.utils';
import { PARAMS_FOLDER } from 'domain/oscilloscope-settings/oscilloscope-settings.constants';
import { Param } from 'domain/param/param.types';
import { extractDeviceFromPath } from 'domain/path/path.utils';

interface OscilloscopeContainerHook {
  params: Param[];
}

export const useOscilloscopeContainer = (): OscilloscopeContainerHook => {
  const { state } = useContext(AhfContext);
  const location = useLocation();
  const [params, setParams] = useState<Param[]>([]);

  const deviceId = extractDeviceFromPath(location.pathname);
  useEffect(() => {
    const folder = findFolderById(
      state.devices[+deviceId].structure,
      `${state.devices[+deviceId].structure.id}/${PARAMS_FOLDER}`,
    );

    if (folder) {
      const params = getParamsFromFolder(folder, []);
      if (params !== undefined) {
        setParams(params);
      }
    }
  }, [deviceId, state.devices]);

  return {
    params,
  };
};
