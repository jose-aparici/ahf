import { AhfContext } from 'contexts/store/context';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { AppCommand } from 'domain/app/app.types';
import { PARAMS_FOLDER } from 'domain/oscilloscope-settings/oscilloscope-settings.constants';
import { extractDeviceFromPath } from 'domain/path/path.utils';

import { getParamsByDeviceId } from '../../domain/oscilloscope-settings/oscilloscope-settings.utils';

export const useOscilloscopeContainer = (): void => {
  const { state, dispatch } = useContext(AhfContext);
  const { settings } = state.oscilloscope;

  const location = useLocation();

  const deviceId = extractDeviceFromPath(location.pathname);
  useEffect(() => {
    if (settings.deviceId !== +deviceId) {
      const params = getParamsByDeviceId(
        state.devices[+deviceId].structure,
        `${state.devices[+deviceId].structure.id}/${PARAMS_FOLDER}`,
      );

      if (params) {
        dispatch({
          type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
          payload: {
            deviceId: +deviceId,
            channels: settings.channels.map((channel) => {
              const param = params.find(
                (param) => param.paramId === channel.id,
              );
              return param
                ? { id: channel.id, value: param, selected: true }
                : { id: channel.id };
            }),
            params,
            trigger: params.find(
              (param) => param.paramId === settings.trigger.id,
            )
              ? { id: params[0].paramId, value: params[0] }
              : { id: settings.trigger.id },
            triggerLevel: settings.triggerLevel,
            triggerMode: settings.triggerMode,
            samplePeriod: settings.samplePeriod,
            delay: settings.delay,
            mode: settings.mode,
            type: settings.type,
          },
        });
      }
    }
  }, [deviceId, state.devices, dispatch, settings]);
};
