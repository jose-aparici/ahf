import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Resource } from 'domain/resource/resource.type';

import { AhfFolderContainer } from './folder/folder.container';
import { AhfParamDetailContainer } from './param-detail/param-detail.container';
import { AhfFolderContext } from './store/context';

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
    if (!resource.currentParamIndex) {
      dispatch({ type: 'FOLDER_CHANGE', payload: resource.folder });
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
      {resource.currentParamIndex && resource.currentParamIndex >= 0 ? (
        <AhfParamDetailContainer />
      ) : (
        <AhfFolderContainer />
      )}
    </>
  );
};
