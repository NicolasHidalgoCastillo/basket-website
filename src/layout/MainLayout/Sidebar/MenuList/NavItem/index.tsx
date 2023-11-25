'use client'

import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';

// project imports
import { MENU_OPEN, SET_MENU } from 'store/actions';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from 'hooks';
import Link from 'next/link';
import { INavItem } from 'interfaces';

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }: {
  item: INavItem, level: number
}) => {
  const theme = useTheme();
  const dispatch =
    useAppDispatch()
  const pathname = usePathname();
  const customization = useAppSelector((state: any) => state.customizationReducer);
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));
  const Icon = item.icon;
  const itemIcon = item?.icon ? (
    <Icon stroke={1.5} size="1.3rem" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: customization.isOpen.findIndex((id: any) => id === item?.id) > -1 ? 8 : 6,
        height: customization.isOpen.findIndex((id: any) => id === item?.id) > -1 ? 8 : 6
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  );

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps: {
    component?: any,
    href?: any,
    target?: any
  } = {
    component: forwardRef(function LinkComponent(props, ref) {
      return <Link {...props} href={item.url} target={itemTarget} />;
    })
  };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = (id: any) => {
    dispatch({ type: MENU_OPEN, id });
    if (matchesSM) dispatch({ type: SET_MENU, opened: false });
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch({ type: MENU_OPEN, id: item.id });
    }
    // eslint-disable-next-line
  }, [pathname]);

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        borderRadius: `${customization.borderRadius}px`,
        mb: 0.5,
        backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
        py: level > 1 ? 1 : 1.25,
        pl: customization.opened ? `${level * 24}px` : 1.5

      }}
      selected={customization.isOpen.findIndex((id: any) => id === item.id) > -1}
      onClick={() => itemHandler(item.id)}
    >

      <ListItemIcon
      >{itemIcon}</ListItemIcon>
      {
        customization.opened &&
        <ListItemText
          primary={
            <Typography color="inherit" sx={{ fontSize: '0.9rem' }}>
              {item.title}
            </Typography>
          }
        />
      }
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
