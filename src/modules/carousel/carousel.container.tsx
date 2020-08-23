import React, { useEffect, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { Carousel } from 'domain/carousel/carouse.type';

import { AhfCarouselItemContainer } from './item/carousel.item.cotainer';

export const AhfCarouselContainer: React.FC = () => {
  const [carousel, setCarousel] = useState<Carousel>({ items: [] });

  useEffect(() => {
    setCarousel({
      items: [
        { cards: [{ title: 'title1', description: 'description1' }] },
        { cards: [{ title: 'title2', description: 'description2' }] },
      ],
    });
  }, []);
  return (
    <SwipeableViews enableMouseEvents>
      {carousel.items.map((item, index) => (
        <AhfCarouselItemContainer key={index} item={item} />
      ))}
    </SwipeableViews>
  );
};
