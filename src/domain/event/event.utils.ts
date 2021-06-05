import { AhfLog } from 'domain/ahf-event/ahf-event.types';

import { AhfLogType } from '../ahf-event/ahf-event.types';
import { Log } from './events.type';

export const transformFromLogToAhfLog = (log: Log): AhfLog => {
  return {
    Date: log.date,
    Time: log.time,
    Message: log.message,
    'Operating Hours': log.operatingHours,
    Type: (log.type as unknown) as AhfLogType,
  };
};
