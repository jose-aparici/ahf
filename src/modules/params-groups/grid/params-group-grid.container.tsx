import React from 'react';

import { Param } from 'domain/params-group/params-group.type';

import { AhfParamComponent } from '../param/param.component';

interface Props {
  params: Array<Param>;
  className?: string;
}

export const AhfParamsGroupGridContainer: React.FC<Props> = ({
  params,
  className,
}: Props) => (
  <div className={className}>
    {params.map((param, index) => (
      <AhfParamComponent key={index} param={param} />
    ))}
  </div>
);
