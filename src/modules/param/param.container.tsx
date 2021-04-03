import React from 'react';

import { Param } from 'domain/param/param.types';

interface Props {
  param: Param;
}
export const AhfParamContainer: React.FC<Props> = ({ param }: Props) => (
  <div>{param.paramId}</div>
);
