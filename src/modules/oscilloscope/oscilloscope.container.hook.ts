import { AhfContext } from 'contexts/store/context';
import i18n from 'i18n';
import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { AppCommand } from 'domain/app/app.types';
import { getChannelsByDevice } from 'domain/channel/channel.utils';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { PARAMS_FOLDER } from 'domain/oscilloscope-settings/oscilloscope-settings.constants';
import { extractDeviceFromPath } from 'domain/path/path.utils';

export const useOscilloscopeContainer = (): void => {
  const { state, dispatch } = useContext(AhfContext);
  const { settings } = state.oscilloscope;

  const location = useLocation();
  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  const deviceId = extractDeviceFromPath(location.pathname);
  useEffect(() => {
    if (settings.deviceId !== +deviceId) {
      const deviceChannels = getChannelsByDevice(
        state.devices[+deviceId].structure,
        `${state.devices[+deviceId].structure.id}/${PARAMS_FOLDER}`,
        currentLanguage,
      );

      if (deviceChannels) {
        const foundedTrigger = deviceChannels.find(
          (deviceChannel) => deviceChannel.id === settings.trigger.id,
        );

        dispatch({
          type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
          payload: {
            deviceId: +deviceId,
            channels: settings.channels.map((channel) => {
              const founded = deviceChannels.find(
                (deviceChannel) => deviceChannel.id === channel.id,
              );
              return founded
                ? { ...founded, selected: true }
                : { id: 0, name: '---', selected: false };
            }),
            deviceChannels,
            trigger: foundedTrigger
              ? { ...foundedTrigger, selected: true }
              : { id: 0, name: '---', selected: false },
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
