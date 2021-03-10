import React, { useState } from 'react';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';

import { Device, DeviceNode } from 'domain/device/device.types';

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
  const [currentExpanded, setCurrentExpanded] = useState<string[]>([]);
  const handleCurrentExpanded = (nodeId: string): void =>
    currentExpanded.length > 0 && currentExpanded[0] === nodeId
      ? setCurrentExpanded([])
      : setCurrentExpanded([nodeId]);

  const renderTree = (nodes: DeviceNode) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.label}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {Object.keys(devices).map(
        (deviceKey) =>
          devices[deviceKey].info.status === 1 &&
          devices[deviceKey].structure &&
          renderTree(devices[deviceKey].structure),
      )}
    </TreeView>
  );
};
