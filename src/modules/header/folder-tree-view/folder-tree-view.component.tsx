import React from 'react';
import { NavLink } from 'react-router-dom';

import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';

import { Device } from 'domain/device/device.types';
import { Folder } from 'domain/folder/folder.types';

import { useFolderTreeViewComponentStyles } from './folder-tree-view.styles';

interface Props {
  device: Device;
  foldersExpandedIds: string[];
  onToggleSideBar: () => void;
}

export const AhfFolderTreeViewComponent: React.FC<Props> = ({
  device,
  foldersExpandedIds,
  onToggleSideBar,
}: Props) => {
  const classes = useFolderTreeViewComponentStyles();

  const renderTree = (folder: Folder) => {
    return (
      <TreeItem
        key={folder.id}
        nodeId={folder.id}
        onLabelClick={onToggleSideBar}
        classes={{
          content: classes.treeItemContent,
        }}
        label={
          <NavLink
            className={classes.navLink}
            activeClassName={classes.navLinkActive}
            to={`${encodeURI(folder.id)}`}
          >
            {folder.label}
          </NavLink>
        }
      >
        {Array.isArray(folder.children)
          ? folder.children.map((children) => renderTree(children))
          : null}
      </TreeItem>
    );
  };

  return (
    <TreeView className={classes.root} defaultExpanded={foldersExpandedIds}>
      {device.info.status > 0 &&
        device.structure &&
        renderTree(device.structure)}
    </TreeView>
  );
};
