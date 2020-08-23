import React from 'react';
import { Link } from 'react-router-dom';

import { AhFPage } from '../ahf.page';
import { AppRoutes } from '../App.routes';

export const AhfMainPage: React.FC = () => {
  return (
    <AhFPage>
      <Link to={AppRoutes.CarouselPage}>Carousel</Link>
    </AhFPage>
  );
};
