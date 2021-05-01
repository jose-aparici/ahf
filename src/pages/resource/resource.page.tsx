import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { AhfContext } from 'store/context';

import { Resource } from 'domain/resource/resource.type';
import { findResourceByPath } from 'domain/resource/resource.utils';
import { useFolderNavigation } from 'modules/resource/folder/folder-navigation.hook';
import { AhfResourceContainer } from 'modules/resource/resource.container';
import { AhfResourceProvider } from 'modules/resource/store/context';
import { AhfPage } from 'pages/ahf.page';

interface ParamTypes {
  deviceId: string;
}

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

export const AhfResourcePage: React.FC = () => {
  const { url } = useRouteMatch();
  const { state } = useContext(AhfContext);
  const { deviceId } = useParams<ParamTypes>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState('');
  const { goNext, goPrevious } = useFolderNavigation();
  const [currentResource, setCurrentResource] = useState<Resource>();
  const history = useHistory();

  useEffect(() => {
    console.log('entra en use effect');
    if (state?.devices[+deviceId]?.structure) {
      const resource = findResourceByPath(
        url,
        state.devices[+deviceId].structure,
      );

      if (resource) {
        setCurrentResource(resource);
        setTransition('');
      }
    }
  }, [deviceId, state, url]);

  const handleChangeIndex = (index: number) => {
    console.log('entra en state');
    index >= currentIndex ? setTransition('next') : setTransition('previous');
    setCurrentIndex(index);
    // setCurrentResource(undefined);
  };

  const slideRenderer = (params: any) => {
    const { index, key } = params;
    // return <div key={key}>divv {index}</div>;
    if (currentResource && index === currentIndex) {
      console.log('entra');
      debugger;
      return (
        <div key={key} style={{ minHeight: '395px' }}>
          {transition !== '' ? (
            <div>loading</div>
          ) : (
            <AhfResourceContainer resource={currentResource} />
          )}
        </div>
      );
    } else {
      return <React.Fragment key={key} />;
    }
  };

  const handleTransitionEnd = () => {
    console.log('transition end');
    if (transition !== '' && currentResource?.folder.id) {
      console.log('transition next');
      const nextFolder =
        transition === 'next'
          ? goNext(currentResource.folder)
          : goPrevious(currentResource.folder);

      nextFolder &&
        history.push(history.location.pathname.replace(/[^]*$/, nextFolder.id));
    }
  };

  return (
    <AhfPage>
      <AhfResourceProvider>
        {currentResource && (
          <VirtualizeSwipeableViews
            index={currentIndex}
            onChangeIndex={handleChangeIndex}
            enableMouseEvents
            slideRenderer={slideRenderer}
            onTransitionEnd={handleTransitionEnd}
          />
        )}
      </AhfResourceProvider>
    </AhfPage>
  );
};
