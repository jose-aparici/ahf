import clsx from 'clsx';
import React from 'react';

import { Container } from '@material-ui/core';

import { useAhfPageStyles } from './ahf.page.styles';

interface Props {
  children: NonNullable<React.ReactNode>;
  className?: string;
}
export const AhfPage: React.FC<Props> = ({ children, className }: Props) => {
  const classes = useAhfPageStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={clsx(classes.container, className)}>
        {children}
      </Container>
    </div>
  );
};
