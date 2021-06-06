import React from 'react';
import { NavLink } from 'react-router-dom';

import { Breadcrumbs, Link } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { Breadcrumb } from 'domain/breadcrumbs/breadcrumbs.types';

import { useBreadcrumbsComponentStyles } from './breadcrumbs.component.styles';

interface Props {
  breadcrumbs: Breadcrumb[];
  currentLanguage: number;
}
export const AhfBreadcrumbsComponent: React.FC<Props> = ({
  breadcrumbs,
  currentLanguage,
}: Props) => {
  const classes = useBreadcrumbsComponentStyles();
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
      classes={{ separator: classes.separator }}
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
            {breadcrumb.label[currentLanguage]}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
