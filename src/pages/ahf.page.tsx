import React from 'react';

import { Container } from '@material-ui/core';

import { useAhfPageStyles } from './ahf.page.styles';

interface Props {
  children: NonNullable<React.ReactNode>;
}
export const AhFPage: React.FC<Props> = ({ children }: Props) => {
  const classes = useAhfPageStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        {children}
      </Container>
    </div>
  );
};
