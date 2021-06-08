import { AhfBackdropContext } from 'contexts/backdrop/context';
import { AhfToasterContext } from 'contexts/toaster/context';
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { Severity } from 'domain/notification/notification.types';

import { ParamRead } from '../../../domain/param/param.types';

interface SaveParamHook {
  setNextMarker: Dispatch<SetStateAction<number | undefined>>;
  setParamToSave: Dispatch<SetStateAction<ParamRead | undefined>>;
  paramToSave: ParamRead | undefined;
  openBackdrop: () => void;
}

export const useSaveParam = (): SaveParamHook => {
  const { isBackdropOpened, closeBackdrop, openBackdrop } = useContext(
    AhfBackdropContext,
  );
  const { t } = useTranslation();
  const timeoutIdRef = useRef<number>();

  const [paramToSave, setParamToSave] = useState<ParamRead>();

  const { displayNotification } = useContext(AhfToasterContext);

  const [nextMarker, setNextMarker] = useState(paramToSave?.marker);

  useEffect(() => {
    if (
      isBackdropOpened &&
      nextMarker &&
      paramToSave &&
      paramToSave?.marker >= nextMarker
    ) {
      closeBackdrop();
      setNextMarker(paramToSave.marker);
      displayNotification({
        text: t('RESOURCE.PARAM_DETAIL.SAVE.SUCCESS'),
        severity: Severity.SUCCESS,
      });
    }
  }, [
    nextMarker,
    closeBackdrop,
    isBackdropOpened,
    displayNotification,
    paramToSave,
    t,
  ]);

  useEffect(() => {
    if (isBackdropOpened) {
      timeoutIdRef.current = window.setTimeout(() => {
        closeBackdrop();
        displayNotification({
          text: t('RESOURCE.PARAM_DETAIL.SAVE.WARNING'),
          severity: Severity.WARNING,
        });
      }, 5000);

      return () => {
        window.clearTimeout(timeoutIdRef.current);
      };
    }
  }, [closeBackdrop, isBackdropOpened, displayNotification, t]);

  return {
    setNextMarker,
    setParamToSave,
    paramToSave,
    openBackdrop,
  };
};
