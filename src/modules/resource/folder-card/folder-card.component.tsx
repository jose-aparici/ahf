import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

import { Folder } from 'domain/folder/folder.types';

import { useFolderCardComponentStyles } from './folder-card.component.styles';

interface Props {
  folder: Folder;
  onClickFolder: (folder: Folder) => void;
}

export const AhfFolderCardComponent: React.FC<Props> = ({
  folder,
  onClickFolder,
}: Props) => {
  const classes = useFolderCardComponentStyles();
  return (
    <Card
      variant="elevation"
      onClick={() => onClickFolder(folder)}
      className={classes.cardContainer}
    >
      <CardContent className={classes.contentContainer}>
        <FolderOpenIcon />
        <Typography className={classes.name}>{folder.label}</Typography>
      </CardContent>
    </Card>
  );
};
