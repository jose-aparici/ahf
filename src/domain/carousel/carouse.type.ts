import { Card } from 'domain/card/card.types';

export interface CarouselItem {
  cards: Array<Card>;
}

export interface Carousel {
  items: Array<CarouselItem>;
}
