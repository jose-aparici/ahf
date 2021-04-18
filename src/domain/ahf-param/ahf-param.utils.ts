import { Param } from 'domain/param/param.types';

export const findParamIndexById = (
  params: Param[],
  paramId: string,
): number => {
  const paramIndex = params.findIndex((param) => param.paramId === +paramId);
  if (paramIndex >= 0) {
    return paramIndex;
  } else {
    throw new Error('param not found');
  }
};
