import { makeStyles } from '@material-ui/core';

export const useSideBarComponentStyles = makeStyles(() => ({
  iconsRoot: {
    display: 'flex',
    flexDirection: 'column',
    margin: '16px',
    height: '100%',
  },
  iconsSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  iconsSectionTitle: {
    marginBottom: '8px',
  },
  iconsSectionUpdate: {
    flexGrow: 1,
  },

  eventsButton: {
    marginBottom: '8px',
    borderWidth: '2px',
    textTransform: 'none',
  },
  latestEventsButton: {
    borderColor: 'grey',
    color: 'grey',
  },
  allEventsButton: {
    borderColor: 'red',
    color: 'red',
  },
  openSavedEventsButton: {
    borderColor: 'black',
    color: 'black',
  },
  saveEventsButton: {
    borderColor: 'green',
    color: 'green',
  },
}));
