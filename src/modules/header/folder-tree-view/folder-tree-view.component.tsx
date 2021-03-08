import React, { useState } from 'react';

import { Button, CircularProgress } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';

import { DeviceAhf } from 'domain/device/device.types';

import { useFolderTreeViewComponentStyles } from './folder-tree-view.styles';

interface Props {
  devices: Record<string, DeviceAhf>;
  onToggleSideBar: () => void;
}

export const AhfFolderTreeViewComponent: React.FC<Props> = ({
  devices,
  onToggleSideBar,
}: Props) => {
  const classes = useFolderTreeViewComponentStyles();
  const [currentExpanded, setCurrentExpanded] = useState<string[]>([]);
  const handleCurrentExpanded = (nodeId: string): void =>
    currentExpanded.length > 0 && currentExpanded[0] === nodeId
      ? setCurrentExpanded([])
      : setCurrentExpanded([nodeId]);
  return (
    <TreeView className={classes.root} expanded={currentExpanded}>
      {Object.keys(devices).map((deviceKey) => {
        return (
          <TreeItem
            key={deviceKey}
            nodeId={deviceKey}
            classes={{ content: classes.chilTreeItemContent }}
            onLabelClick={(): void => handleCurrentExpanded(deviceKey)}
            label={
              <Button
                variant="text"
                color="secondary"
                className={classes.parentTreeItem}
                startIcon={
                  devices[deviceKey].info.Status === 0 ? (
                    <CircularProgress size={20} color="secondary" />
                  ) : (
                    <CheckCircleOutlineIcon htmlColor={'green'} />
                  )
                }
              >
                Device {deviceKey}
              </Button>
            }
          >
            {/*  {devices[deviceKey].structure &&
              Object.keys(devices[deviceKey].structure.FolderData).map(
                (folderName, index) => {
                  return (
                    <TreeItem
                      key={folderName}
                      nodeId={`${deviceKey}${TREE_NODES_SEPARATOR}${index}`}
                      label={
                        <Button
                          component={Link}
                          to={`${AppRoutes.DevicesPage}/${deviceKey}/${FOLDER}/${folderName}`}
                          color="secondary"
                          className={classes.chilTreeItemButton}
                        >
                          {folderName}
                        </Button>
                      }
                      onLabelClick={onToggleSideBar}
                    ></TreeItem>
                  );
                },
              )} */}
          </TreeItem>
        );
      })}
    </TreeView>
  );
};
