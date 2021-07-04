import i18n from 'i18n';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Box, SwipeableDrawer, Toolbar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Channel } from 'domain/oscilloscope-settings/oscilloscope-settings.types';

import { AhfSideBarComponent } from './components/side-bar.component';
import { useSideBarContainerStyles } from './side-bar.container.styles';

interface Props {
  channels: Channel[];
  isOpen: boolean;
  onToggleSideBar: () => void;
}

export const AhfSideBarContainer: React.FC<Props> = ({
  channels,
  isOpen,
  onToggleSideBar,
}: Props) => {
  const classes = useSideBarContainerStyles();
  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;
  const location = useLocation();

  useEffect(() => {
    onToggleSideBar();
  }, [location, onToggleSideBar]);

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
        <AhfSideBarComponent
          channels={channels}
          currentLanguage={currentLanguage}
        />
        <Toolbar className={classes.toolBarBottom} />
      </SwipeableDrawer>
    </>
  );
};
