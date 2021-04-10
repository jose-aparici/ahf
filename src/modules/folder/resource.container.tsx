import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Resource } from 'domain/resource/resource.type';

import { AhfFolderContainer } from './folder/folder.container';
import { AhfParamDetailContainer } from './param-detail/param-detail.container';
import { AhfFolderContext } from './store/context';
import { RESOURCE_CHANGE } from './store/types';

interface ParamTypes {
  deviceId: string;
}

interface Props {
  resource: Resource;
}
export const AhfResourceContainer: React.FC<Props> = ({ resource }: Props) => {
  const { deviceId } = useParams<ParamTypes>();
  const { update, stopUpdate, listen } = useSocketHook();

  const { dispatch } = useContext(AhfFolderContext);

  useEffect(() => {
    dispatch({ type: RESOURCE_CHANGE, payload: resource });
    if (!resource.currentParamIndex) {
      update(
        deviceId,
        resource.folder.id.replace(/\/devices\/([A-Za-z0-9]+)\//, ''),
      );
      const subscription = listen(dispatch);

      return () => {
        stopUpdate();
        subscription.unsubscribe();
      };
    }
  }, [resource, dispatch, deviceId, listen, stopUpdate, update]);

  return (
    <>
      {resource.currentParamIndex !== undefined ? (
        <AhfParamDetailContainer />
      ) : (
        <AhfFolderContainer />
      )}
    </>
  );
};