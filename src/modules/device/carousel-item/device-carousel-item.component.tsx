import React from 'react';

import { DeviceParams } from 'domain/ahf/ahf.types';

import { AhfParamCardComponent } from '../card/param-card.component';

interface Props {
  paramsGroup: DeviceParams;
  className?: string;
}

export const AhfDeviceCarouselItemComponent: React.FC<Props> = ({
  paramsGroup,
  className,
}: Props) => (
  <>
    <div>Params items: {Object.keys(paramsGroup.ParData).length}</div>
    <div className={className}>
      {paramsGroup.ParData.map((param, index) => (
        <AhfParamCardComponent key={index} param={param} />
      ))}
    </div>
  </>
);
