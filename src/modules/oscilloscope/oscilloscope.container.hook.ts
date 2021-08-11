import { AhfContext } from 'contexts/store/context';
import i18n from 'i18n';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { AppCommand } from 'domain/app/app.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { PARAMS_FOLDER } from 'domain/oscilloscope-settings/oscilloscope-settings.constants';
import { extractDeviceFromPath } from 'domain/path/path.utils';

import { getParamsByDeviceId } from '../../domain/oscilloscope-settings/oscilloscope-settings.utils';

export const useOscilloscopeContainer = (): void => {
  const { state, dispatch } = useContext(AhfContext);
  const { settings } = state.oscilloscope;

  const location = useLocation();
  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

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
                ? {
                    id: channel.id,
                    name: param.name[currentLanguage],
                    selected: true,
                  }
                : { id: channel.id };
            }),
            params,
            trigger: params.find(
              (param) => param.paramId === settings.trigger.id,
            )
              ? { id: params[0].paramId, name: params[0].name[currentLanguage] }
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
  }, [deviceId, state.devices, dispatch, settings, currentLanguage]);
};
