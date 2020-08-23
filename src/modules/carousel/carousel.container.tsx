import React, { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { Carousel } from 'domain/carousel/carouse.type';

import { useCarousel } from './carousel.hook';
import { AhfCarouselItemContainer } from './item/carousel.item.container';

export const AhfCarouselContainer: React.FC = () => {
  const [carousel, setCarousel] = useState<Carousel>({ items: [] });
  const { retrieveCarouselData } = useCarousel();

  useEffect(() => {
    const carouselData$ = retrieveCarouselData().subscribe(setCarousel);
    return () => carouselData$.unsubscribe();
  }, []);

  return (
    <SwipeableViews enableMouseEvents>
      {carousel.items.map((item, index) => (
        <AhfCarouselItemContainer key={index} item={item} />
      ))}
    </SwipeableViews>
  );
};
