import classes from '*.module.css';
import React from 'react';

import { CarouselItem } from 'domain/carousel/carouse.type';

import { AhfCardGridContainer } from '../card-grid/card-grid.container';
import { useCarouselItemContainerStyles } from './carousel.item.container styles';

interface Props {
  item: CarouselItem;
}

export const AhfCarouselItemContainer: React.FC<Props> = ({ item }: Props) => {
  const classes = useCarouselItemContainerStyles();
  return (
    <AhfCardGridContainer
      className={classes.gridContainer}
      cards={item.cards}
    />
  );
};
