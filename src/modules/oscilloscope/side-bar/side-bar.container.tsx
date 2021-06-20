import i18n from 'i18n';
import React, { useState } from 'react';

import { Box, SwipeableDrawer, Toolbar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { AHF_LANGUAGES } from 'domain/languages/languages.constants';
import { findLanguageByLocale } from 'domain/languages/languages.utils';
import { Channel } from 'domain/oscilloscope/oscilloscope.types';

import { AhfSideBarComponent } from './components/side-bar.component';
import { useSideBarContainerStyles } from './side-bar.container.styles';

interface Props {
  channels: Channel[];
}

export const AhfSideBarContainer: React.FC<Props> = ({ channels }: Props) => {
  const classes = useSideBarContainerStyles();
  const currentLanguage = findLanguageByLocale(AHF_LANGUAGES, i18n.language)
    .position;

  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSideBar = (open: boolean): void => setIsOpen(!open);

  return (
    <>
      <SwipeableDrawer
        anchor={'right'}
        open={isOpen}
        onClose={() => handleToggleSideBar(isOpen)}
        onOpen={() => handleToggleSideBar(isOpen)}
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
          {!isOpen && <ChevronLeftIcon onClick={() => setIsOpen(true)} />}
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
