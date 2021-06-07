import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Resource, ResourceCommand } from 'domain/resource/resource.type';
import { useSocketHook } from 'modules/shared/hooks/socket-hook';

import { AhfFolderContainer } from '../folder/folder.container';
import { AhfParamDetailContainer } from '../param-detail/param-detail.container';
import { AhfResourceContext } from '../store/context';

interface ParamTypes {
  deviceId: string;
}

interface Props {
  resource: Resource;
}
export const AhfResourceContainer: React.FC<Props> = ({ resource }: Props) => {
  const { deviceId } = useParams<ParamTypes>();
  const { update, stopUpdate, listen } = useSocketHook();

  const { dispatch } = useContext(AhfResourceContext);

  useEffect(() => {
    dispatch({ type: ResourceCommand.RESOURCE_CHANGE, payload: resource });
    update(
      deviceId,
      resource.folder.id.replace(/\/devices\/([A-Za-z0-9]+)\//, ''),
    );
    const subscription = listen(dispatch);

    return () => {
      stopUpdate();
      subscription.unsubscribe();
    };
  }, [resource, dispatch, deviceId, listen, stopUpdate, update]);

  return (
    <>
      {resource.currentParamIndex !== undefined ? (
        <AhfParamDetailContainer
          param={resource.folder.params[resource.currentParamIndex]}
        />
      ) : (
        <AhfFolderContainer />
      )}
    </>
  );
};
