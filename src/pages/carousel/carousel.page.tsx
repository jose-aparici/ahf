import React from 'react';

import { AhfCarouselContainer } from 'modules/carousel/carousel.container';
import { AhFPage } from 'pages/ahf.page';

export const AhfCarouselPage: React.FC = () => {
  return (
    <AhFPage>
      <AhfCarouselContainer />
    </AhFPage>
  );
};
