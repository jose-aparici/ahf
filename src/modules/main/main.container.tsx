import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoutes } from 'pages/App.routes';

export const AhfMainContainer: React.FC = () => (
  <Link to={AppRoutes.CarouselPage}>Carousel</Link>
);
