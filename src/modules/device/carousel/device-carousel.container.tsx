import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import { ParamsGroup } from 'domain/device/params-group.type';

import { AhfDeviceCarouselItemComponent } from '../carousel-item/device-carousel-item.component';
import { useDeviceCarouselContainerStyles } from './device-carousel.container.styles';

interface Props {
  paramsGroups: Array<ParamsGroup>;
}

export const AhfDeviceCarouselContainer: React.FC<Props> = ({
  paramsGroups,
}: Props) => {
  const classes = useDeviceCarouselContainerStyles();
  return (
    <SwipeableViews enableMouseEvents>
      {paramsGroups.map((paramsGroup, index) => (
        <AhfDeviceCarouselItemComponent
          key={index}
          className={classes.carouselItemContainer}
          params={paramsGroup.params}
        />
      ))}
    </SwipeableViews>
  );
};
