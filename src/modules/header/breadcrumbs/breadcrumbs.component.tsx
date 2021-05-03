import React from 'react';
import { NavLink } from 'react-router-dom';

import { Breadcrumbs, Link } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { Breadcrumb } from 'domain/breadcrumbs/breadcrumbs.types';

import { useBreadcrumbsComponentStyles } from './breadcrumbs.component.styles';

interface Props {
  breadcrumbs: Breadcrumb[];
}
export const AhfBreadcrumbsComponent: React.FC<Props> = ({
  breadcrumbs,
}: Props) => {
  const classes = useBreadcrumbsComponentStyles();
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <Link
            key={index}
            color="inherit"
            to={breadcrumb.path}
            exact
            component={NavLink}
            activeClassName={classes.active}
            className={classes.item}
          >
            {breadcrumb.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
