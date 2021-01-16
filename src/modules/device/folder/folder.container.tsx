import { useSocketHook } from 'hooks/socket-hook';
import React, { useContext, useEffect } from 'react';

import { Param } from 'domain/param/param.types';

import { AhfParamComponent } from '../param/param.component';
import { useFolderContainerStyles } from './folder.container.styles';
import { AhfFolderContext, AhfFolderProvider } from './store/context';

interface Props {
  folderIndex: number;
  params: Param[];
}

export const AhfFolderContainer: React.FC<Props> = ({ params }: Props) => {
  const classes = useFolderContainerStyles();
  const { init } = useSocketHook();

  const { state, dispatch } = useContext(AhfFolderContext);

  useEffect(() => {
    debugger;
    const subscription = init(dispatch);
    return () => subscription.unsubscribe();
  }, [dispatch, init]);

  return (
    <AhfFolderProvider params={params}>
      <div className={classes.root}>
        {state.params.map((param) => (
          <AhfParamComponent
            key={param.ParamID}
            param={param}
            currentLanguage={0}
          />
        ))}
      </div>
    </AhfFolderProvider>
  );
};
