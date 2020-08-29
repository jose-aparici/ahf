import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import { Device } from 'domain/device/device.types';

import { AhfDeviceCarouselItemComponent } from '../carousel-item/device-carousel-item.component';
import { useDeviceCarouselContainerStyles } from './device-carousel.container.styles';

interface Props {
  device: Device;
}

export const AhfDeviceCarouselContainer: React.FC<Props> = ({
  device,
}: Props) => {
  const classes = useDeviceCarouselContainerStyles();
  return (
    <SwipeableViews enableMouseEvents>
      {device.data.map((paramsGroup, index) => (
        <AhfDeviceCarouselItemComponent
          key={index}
          className={classes.carouselItemContainer}
          paramsGroup={paramsGroup}
        />
      ))}
    </SwipeableViews>
  );
};
