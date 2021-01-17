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
}

interface RenderTree {
  name: string;
  children?: RenderTree[];
}

export const AhfFolderTreeView: React.FC<Props> = ({ devices }: Props) => {
  const classes = useFolderTreeViewComponentStyles();

  const handleNodeSelect = (
    event: React.ChangeEvent<Record<string, never>>,
    nodeIds: string[],
  ) => {
    debugger;
    console.log(event, nodeIds);
    //history.push(`devices/${nodeIds[0].split('.')[0]}`);
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={handleNodeSelect}
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
