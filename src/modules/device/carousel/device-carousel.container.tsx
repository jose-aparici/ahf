import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import { DeviceParams } from 'domain/ahf/ahf.types';

import { AhfDeviceCarouselItemComponent } from '../carousel-item/device-carousel-item.component';
import { useDeviceCarouselContainerStyles } from './device-carousel.container.styles';

interface Props {
  deviceParamsGroups: Record<string, DeviceParams>;
}

export const AhfDeviceCarouselContainer: React.FC<Props> = ({
  deviceParamsGroups,
}: Props) => {
  const classes = useDeviceCarouselContainerStyles();
  return (
    <SwipeableViews enableMouseEvents>
      {Object.keys(deviceParamsGroups).map((key, index) => (
        <AhfDeviceCarouselItemComponent
          key={index}
          className={classes.carouselItemContainer}
          paramsGroup={deviceParamsGroups[key]}
        />
      ))}
    </SwipeableViews>
  );
};
