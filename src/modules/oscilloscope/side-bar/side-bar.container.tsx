import { AhfContext } from 'contexts/store/context';
import i18n from 'i18n';
import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Box, SwipeableDrawer, Toolbar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { AppCommand } from 'domain/app/app.types';
import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';

import { AhfSideBarComponent } from './components/side-bar.component';
import { useSideBarContainerStyles } from './side-bar.container.styles';

interface Props {
  isOpen: boolean;
  sliderChannelValues: number[][];
  sliderValues: number[];
  onToggleSideBar: () => void;
}

export const AhfSideBarContainer: React.FC<Props> = ({
  isOpen,
  sliderChannelValues,
  sliderValues,
  onToggleSideBar,
}: Props) => {
  const classes = useSideBarContainerStyles();
  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;
  const location = useLocation();
  const { state, dispatch } = useContext(AhfContext);

  const { chart } = state.oscilloscope;

  const { channels, type } = state.oscilloscope.settings;

  useEffect(() => {
    onToggleSideBar();
  }, [location, onToggleSideBar]);

  const handleToggleChannel = (index: number) => {
    channels[index].selected = !channels[index].selected;
    dispatch({
      type: AppCommand.UPDATE_OSCILLOSCOPE_SETTINGS,
      payload: { ...state.oscilloscope.settings, channels: [...channels] },
    });
  };

  return (
    <>
      <SwipeableDrawer
        className={classes.drawer}
        anchor={'right'}
        open={isOpen}
        variant="persistent"
        onClose={onToggleSideBar}
        onOpen={onToggleSideBar}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{ className: classes.swipePaper }}
        swipeAreaWidth={15}
      >
        <Toolbar className={classes.toolBarTop} />
        <Box
          className={classes.pullerContainer}
          position="absolute"
          visibility="visible"
          top={'50%'}
          right={0}
          left={0}
        >
          {!isOpen ? (
            <ChevronLeftIcon onClick={onToggleSideBar} />
          ) : (
            <ChevronRightIcon onClick={onToggleSideBar} />
          )}
        </Box>
        {chart && (
          <AhfSideBarComponent
            channels={channels}
            currentLanguage={currentLanguage}
            onToggleChannel={handleToggleChannel}
            sliderValues={sliderChannelValues}
            c1Value={+chart[type].labels[sliderValues[0]]}
            c2Value={+chart[type].labels[sliderValues[1]]}
          />
        )}
        <Toolbar className={classes.toolBarBottom} />
      </SwipeableDrawer>
    </>
  );
};
