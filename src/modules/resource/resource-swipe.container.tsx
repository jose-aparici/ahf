import { AhfContext } from 'contexts/store/context';
import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { SlideRenderProps, virtualize } from 'react-swipeable-views-utils';

import { Transition } from 'domain/resource-navigation/resource-navigation.types';
import { Resource } from 'domain/resource/resource.type';
import { findResourceByPath } from 'domain/resource/resource.utils';
import { AhfNavigationNextComponent } from 'modules/shared/components/navigation-next/navigation-next.component';
import { AhfNavigationPreviousComponent } from 'modules/shared/components/navigation-previous/navigation-previous.component';

import { useResourceSwipeNavigation } from './resource-swipe-navigation.hook';
import { useResourceSwipeContainerStyles } from './resource-swipe.container.styles';
import { AhfResourceContainer } from './resource/resource.container';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

interface Props {
  deviceId: string;
}

export const AhfResourceSwipeContainer: React.FC<Props> = ({
  deviceId,
}: Props) => {
  const classes = useResourceSwipeContainerStyles();
  const { url } = useRouteMatch();
  const { state } = useContext(AhfContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState<Transition>(Transition.EMPTY);
  const [currentResource, setCurrentResource] = useState<Resource>();
  const {
    hasNextResource,
    hasPreviousResource,
    goNextResource,
    goPreviousResource,
  } = useResourceSwipeNavigation();

  useEffect(() => {
    const resource = findResourceByPath(
      url,
      state.devices[+deviceId].structure,
    );

    if (resource) {
      setCurrentResource(resource);
      setTransition(Transition.EMPTY);
    }
  }, [deviceId, state.devices, url]);

  const handleChangeIndex = (index: number) => {
    if (currentResource) {
      if (index >= currentIndex && hasNextResource(currentResource)) {
        setTransition(Transition.NEXT);
        setCurrentIndex(index);
        return;
      }

      if (index < currentIndex && hasPreviousResource(currentResource)) {
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
        <div key={key} className={classes.slide}>
          {transition !== Transition.EMPTY ? (
            <></>
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
      transition === Transition.NEXT
        ? goNextResource(currentResource)
        : goPreviousResource(currentResource);
    }
  };

  return (
    <>
      {currentResource && (
        <>
          <VirtualizeSwipeableViews
            enableMouseEvents
            index={currentIndex}
            onChangeIndex={handleChangeIndex}
            slideRenderer={slideRenderer}
            onTransitionEnd={handleTransitionEnd}
            overscanSlideBefore={hasPreviousResource(currentResource) ? 1 : 0}
            overscanSlideAfter={hasNextResource(currentResource) ? 1 : 0}
          />
          {transition === Transition.EMPTY && (
            <>
              {hasPreviousResource(currentResource) && (
                <AhfNavigationPreviousComponent
                  onPrevious={() => goPreviousResource(currentResource)}
                />
              )}
              {hasNextResource(currentResource) && (
                <AhfNavigationNextComponent
                  onNext={() => goNextResource(currentResource)}
                />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
