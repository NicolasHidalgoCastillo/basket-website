import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, List, Typography } from '@mui/material';

// project imports
import NavItem from '../NavItem';
import NavCollapse from '../NavCollapse';
import { IMenuList, INavItem } from 'interfaces';
import customizationReducer from '../../../../../store/customizationReducer';
import { useAppSelector } from 'hooks';

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }: {
  item: INavItem
}) => {
  const customizationReducer = useAppSelector(state => state.customizationReducer)
  const { opened } = customizationReducer
  // menu list collapse & items
  const items = item.children?.map((menu: any) => {
    switch (menu.type) {
      case 'collapse':
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case 'item':
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        sx={{
          pt:2
        }}
        subheader={
          opened && item.title && (
            <Typography display="block" gutterBottom sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
              {item.title}
              {item.caption && (
                <Typography display="block" gutterBottom>
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      {/* group divider */}
      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object
};

export default NavGroup;
