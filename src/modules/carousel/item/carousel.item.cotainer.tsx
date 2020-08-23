import React from 'react';

import { CarouselItem } from 'domain/carousel/carouse.type';

import { AhfCardGridContainer } from '../card-grid/card-grid.container';

interface Props {
  item: CarouselItem;
}

export const AhfCarouselItemContainer: React.FC<Props> = ({ item }: Props) => (
  <AhfCardGridContainer cards={item.cards} />
);
