import React from 'react';

import { Param } from 'domain/param/param.types';

interface Props {
  param: Param;
}

export const AhfParamContainer: React.FC<Props> = ({ param }: Props) => {
  return (
    <>
      <div>number {param.ParamID}</div>
      <div>name {param.Name[0]}</div>
      <div>value {param.Value}</div>
      <div>description {param.Description[0]}</div>
    </>
  );
};
