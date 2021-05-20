import React from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import InfoIcon from '@material-ui/icons/Info';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import WarningIcon from '@material-ui/icons/Warning';

import { Log, LogType } from 'domain/events/events.type';

interface Props {
  rows: Log[];
}
export const AhfTableComponent: React.FC<Props> = ({ rows }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.type === LogType.ERROR && <CancelIcon />}
                {row.type === LogType.WARNING && <WarningIcon />}
                {row.type === LogType.INFO && <InfoIcon />}
                {row.type === LogType.STATUS && <StarBorderIcon />}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.message}</TableCell>
              <TableCell align="right">{row.operatingHours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
