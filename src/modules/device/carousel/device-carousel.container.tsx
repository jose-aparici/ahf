import { useSocketHook } from 'hooks/socket-hook';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SwipeableViews from 'react-swipeable-views';

import { FolderParams } from 'domain/folder/folder.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';

import { AhfParamCardComponent } from '../card/param-card.component';
import { useDeviceCarouselContainerStyles } from './device-carousel.container.styles';

interface Props {
  deviceId: number;
  deviceParamsGroups: Record<string, FolderParams>;
}

export const AhfDeviceCarouselContainer: React.FC<Props> = ({
  deviceId,
  deviceParamsGroups,
}: Props) => {
  const classes = useDeviceCarouselContainerStyles();
  const { update } = useSocketHook();
  const [currentCarouselItem, setCurrentCarouselItem] = useState<number>(0);
  const { i18n } = useTranslation();

  const handleCarouselItemChange = (index: number) => {
    setCurrentCarouselItem(index);
    update(deviceId.toString(), index.toString());
  };

  useEffect(() => {
    update(deviceId.toString(), '0');
  }, [update, deviceId]);

  return (
    <SwipeableViews enableMouseEvents onChangeIndex={handleCarouselItemChange}>
      {Object.keys(deviceParamsGroups).map((key, index) =>
        index === currentCarouselItem ? (
          <React.Fragment key={key}>
            <div>{key}</div>
            <div className={classes.carouselItemContainer}>
              {deviceParamsGroups[key].ParData.map((param) => (
                <AhfParamCardComponent
                  key={param.ParamID}
                  param={param}
                  currentLanguage={
                    findLanguageByLocale(AHF_LANGUAGES, i18n.language).position
                  }
                />
              ))}
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment key={key}></React.Fragment>
        ),
      )}
    </SwipeableViews>
  );
};
