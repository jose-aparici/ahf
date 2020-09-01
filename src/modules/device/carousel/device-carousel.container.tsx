import React, { useState } from 'react';
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
  const [currentCarouselItem, setCurrentCarouselItem] = useState<number>(0);

  return (
    <>
      <div>Carousel items: {Object.keys(deviceParamsGroups).length}</div>
      <SwipeableViews enableMouseEvents onChangeIndex={setCurrentCarouselItem}>
        {Object.keys(deviceParamsGroups).map((key, index) =>
          index === currentCarouselItem ? (
            <AhfDeviceCarouselItemComponent
              key={index}
              className={classes.carouselItemContainer}
              paramsGroup={deviceParamsGroups[key]}
            />
          ) : (
            <React.Fragment key={key}></React.Fragment>
          ),
        )}
      </SwipeableViews>
    </>
  );
};
