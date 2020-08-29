import React from 'react';

import { Param } from 'domain/param/param.types';

import { AhfParamCardComponent } from '../card/param-card.component';

interface Props {
  paramsGroup: Array<Param>;
  className?: string;
}

export const AhfDeviceCarouselItemComponent: React.FC<Props> = ({
  paramsGroup,
  className,
}: Props) => (
  <div className={className}>
    {paramsGroup.map((param, index) => (
      <AhfParamCardComponent key={index} param={param} />
    ))}
  </div>
);
