import { makeStyles } from '@material-ui/core';

export const useFolderTreeViewComponentStyles = makeStyles(() => ({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
  parentTreeItem: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: '1.75',
    textTransform: 'capitalize',
  },
  chilTreeItemContent: {
    display: 'block',
  },
  chilTreeItemButton: {
    textTransform: 'capitalize',
    fontWeight: 400,
  },
}));
