import { useSocketHook } from 'hooks/socket-hook';
import React, { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { DeviceParams } from 'domain/ahf/ahf.types';

import { AhfDeviceCarouselItemComponent } from '../carousel-item/device-carousel-item.component';
import { useDeviceCarouselContainerStyles } from './device-carousel.container.styles';

interface Props {
  deviceId: number;
  deviceParamsGroups: Record<string, DeviceParams>;
}

export const AhfDeviceCarouselContainer: React.FC<Props> = ({
  deviceId,
  deviceParamsGroups,
}: Props) => {
  const classes = useDeviceCarouselContainerStyles();
  const { update } = useSocketHook();
  const [currentCarouselItem, setCurrentCarouselItem] = useState<number>(0);

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
          <AhfDeviceCarouselItemComponent
            key={index}
            className={classes.carouselItemContainer}
            paramsGroupName={key}
            paramsGroup={deviceParamsGroups[key]}
          />
        ) : (
          <React.Fragment key={key}></React.Fragment>
        ),
      )}
    </SwipeableViews>
  );
};
