import React from 'react';
import { NavLink } from 'react-router-dom';

import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { Breadcrumb } from 'domain/breadcrumbs/breadcrumbs.types';

import { useBreadcrumbsContainerStyles } from './breadcrumbs.container.styles';

const handleClick = () => console.log('hola');

interface Props {
  breadcrumbs: Breadcrumb[];
}
export const AhfBreadcrumbs: React.FC<Props> = ({ breadcrumbs }: Props) => {
  const classes = useBreadcrumbsContainerStyles();
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      className={classes.root}
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <Link
            key={index}
            color="inherit"
            onClick={handleClick}
            to={breadcrumb.path}
            exact
            component={NavLink}
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            <Typography>{breadcrumb.label}</Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
