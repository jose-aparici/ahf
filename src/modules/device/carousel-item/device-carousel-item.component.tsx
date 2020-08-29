import React from 'react';

import { Param } from 'domain/device/params-group.type';

import { AhfParamCardComponent } from '../card/param-card.component';

interface Props {
  params: Array<Param>;
  className?: string;
}

export const AhfDeviceCarouselItemComponent: React.FC<Props> = ({
  params,
  className,
}: Props) => (
  <div className={className}>
    {params.map((param, index) => (
      <AhfParamCardComponent key={index} param={param} />
    ))}
  </div>
);
