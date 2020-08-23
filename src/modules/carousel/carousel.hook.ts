import { Observable } from 'rxjs';

import { getCarousel } from 'api/carousel.api';
import { Carousel } from 'domain/carousel/carouse.type';

interface CarouselHook {
  retrieveCarouselData: () => Observable<Carousel>;
}

const retrieveCarouselData = (): Observable<Carousel> => getCarousel();

export const useCarousel = (): CarouselHook => {
  return {
    retrieveCarouselData,
  };
};
