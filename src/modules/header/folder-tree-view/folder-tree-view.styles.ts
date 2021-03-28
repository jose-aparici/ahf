import { makeStyles } from '@material-ui/core';

export const useFolderTreeViewComponentStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 400,
    margin: '8px',
  },
  treeItemContent: {
    display: 'block',
  },
  navLink: {
    textDecoration: 'none',
    color: 'black',
  },
  navLinkActive: {
    fontWeight: 'bold',
    color: 'red',
  },
}));
