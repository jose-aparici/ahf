import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { SlideRenderProps, virtualize } from 'react-swipeable-views-utils';
import { AhfContext } from 'store/context';

import { Transition } from 'domain/resource-navigation/resource-navigation.types';
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
  const [transition, setTransition] = useState<Transition>(Transition.EMPTY);
  const { goNext, goPrevious } = useFolderNavigation();
  const [currentResource, setCurrentResource] = useState<Resource>();
  const history = useHistory();

  useEffect(() => {
    if (state?.devices[+deviceId]?.structure) {
      const resource = findResourceByPath(
        url,
        state.devices[+deviceId].structure,
      );

      if (resource) {
        setCurrentResource(resource);
        setTransition(Transition.EMPTY);
      }
    }
  }, [deviceId, state, url]);

  const handleChangeIndex = (index: number) => {
    if (currentResource) {
      if (index >= currentIndex && goNext(currentResource.folder)) {
        setTransition(Transition.NEXT);
        setCurrentIndex(index);
        return;
      }

      if (index < currentIndex && goPrevious(currentResource.folder)) {
        setTransition(Transition.PREVIOUS);
        setCurrentIndex(index);
        return;
      }
    }
  };

  const slideRenderer = (params: SlideRenderProps) => {
    const { index, key } = params;
    if (currentResource && index === currentIndex) {
      return (
        <div key={key} style={{ minHeight: '395px' }}>
          {transition !== Transition.EMPTY ? (
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
    if (transition !== Transition.EMPTY && currentResource?.folder.id) {
      const nextFolder =
        transition === Transition.NEXT
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
            enableMouseEvents
            index={currentIndex}
            onChangeIndex={handleChangeIndex}
            slideRenderer={slideRenderer}
            onTransitionEnd={handleTransitionEnd}
            overscanSlideBefore={goPrevious(currentResource.folder) ? 1 : 0}
            overscanSlideAfter={goNext(currentResource.folder) ? 1 : 0}
          />
        )}
      </AhfResourceProvider>
    </AhfPage>
  );
};
