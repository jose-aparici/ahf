import React from 'react';
import { NavLink } from 'react-router-dom';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';

import { Device } from 'domain/device/device.types';
import {
  FOLDER_QUERY_PARAM,
  TREE_NODES_SEPARATOR,
} from 'domain/navigation/navigation.constants';
import { AppRoutes } from 'pages/App.routes';

import { useFolderTreeViewComponentStyles } from './folder-tree-view.styles';

interface Props {
  devices: Record<string, Device>;
  onToggleSideBar: () => void;
}

export const AhfFolderTreeViewComponent: React.FC<Props> = ({
  devices,
  onToggleSideBar,
}: Props) => {
  const classes = useFolderTreeViewComponentStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {Object.keys(devices).map((deviceKey) => {
        return (
          <TreeItem
            key={deviceKey}
            nodeId={deviceKey}
            label={`Device ${deviceKey}`}
          >
            {devices[deviceKey].structure &&
              Object.keys(devices[deviceKey].structure.FolderData).map(
                (folderName, index) => {
                  return (
                    <TreeItem
                      key={folderName}
                      nodeId={`${deviceKey}${TREE_NODES_SEPARATOR}${index}`}
                      label={
                        <NavLink
                          to={{
                            pathname: `${AppRoutes.DevicesPage}/${deviceKey}`,
                            search: `?${FOLDER_QUERY_PARAM}=${index}`,
                          }}
                        >
                          {folderName}
                        </NavLink>
                      }
                      onLabelClick={onToggleSideBar}
                    ></TreeItem>
                  );
                },
              )}
          </TreeItem>
        );
      })}
    </TreeView>
  );
};
