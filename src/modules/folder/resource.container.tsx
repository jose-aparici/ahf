import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Folder } from 'domain/folder/folder.types';
import { Param } from 'domain/param/param.types';
import { Resource } from 'domain/resource/resource.type';
import { isFolder, isParam } from 'domain/resource/resource.utils';

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
    if (isFolder(resource)) {
      const folder = resource as Folder;
      dispatch({ type: 'FOLDER_CHANGE', payload: folder });
      update(deviceId, folder.id.replace(/\/devices\/([A-Za-z0-9]+)\//, ''));
      const subscription = listen(dispatch);

      return () => {
        stopUpdate();
        subscription.unsubscribe();
      };
    }
  }, [resource, dispatch, deviceId, listen, stopUpdate, update]);

  return (
    <>
      {resource && isFolder(resource) && <AhfFolderContainer />}
      {resource && isParam(resource) && (
        <AhfParamDetailContainer param={resource as Param} />
      )}
    </>
  );
};
