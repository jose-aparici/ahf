import React from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import { TABLE_HEADERS } from 'domain/settings-admin/settings-admin.constants';
import { SettingsAdminParameter } from 'domain/settings-admin/settings-admin.types';

import { useTableComponentStyles } from './table.component.styles';

interface Props {
  rows: SettingsAdminParameter[];
}

const AhfTableComponent: React.FC<Props> = ({ rows }: Props) => {
  const classes = useTableComponentStyles();
  const tableRows = (rows: SettingsAdminParameter[]) => {
    let currentColor = 'white';
    return rows.map((row: SettingsAdminParameter, index) => {
      if (index > 0 && row.folder !== rows[index - 1].folder) {
        currentColor = currentColor === 'white' ? '#f5f5f5' : 'white';
      }
      return (
        <TableRow key={row.id} style={{ backgroundColor: currentColor }}>
          <TableCell className={classes.cell}>{row.id}</TableCell>
          <TableCell className={classes.cell}>{row.folder}</TableCell>
          <TableCell className={classes.cell}>{row.name}</TableCell>
          <TableCell className={classes.cell}>{row.value}</TableCell>
          <TableCell className={classes.cell}>{row.enumVal}</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <Paper>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {TABLE_HEADERS.map((header) => (
                <TableCell className={classes.cell} key={header.id}>
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{tableRows(rows)}</TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export const AhfTableComponentMemoized = React.memo(AhfTableComponent);
