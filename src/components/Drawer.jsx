import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { CssTransition } from '@mui/base/Transitions';
import { PopupContext } from '@mui/base/Unstable_Popup';
import { Link } from 'react-router-dom';
import { Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Listbox = styled('ul')(
  () => `
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  line-height: 27px;
  box-sizing: border-box;
  padding: 0;
  width: 100%;
  max-width: 500px;
  overflow: hidden;
  outline: 1px solid transparent;
  background: black;
  color: white;
  z-index: 10; /* Ensure it is above other content */
  position: relative;
  margin: 0;


  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `,
);

const NestedListbox = styled('ul')(
  () => `
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  line-height: 27px;
  box-sizing: border-box;
  padding: 2;
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  outline: 1px solid transparent;
  background: black;
  color: white;
  z-index: 10; /* Ensure it is above other content */
  position: relative;
  margin: 0;


  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `,
);

const AnimatedListbox = React.forwardRef(function AnimatedListbox(props, ref) {
  const { ownerState, ...other } = props;
  const popupContext = React.useContext(PopupContext);

  if (popupContext == null) {
    throw new Error(
      'The `AnimatedListbox` component cannot be rendered outside a `Popup` component',
    );
  }

  const verticalPlacement = popupContext.placement.split('-')[0];

  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <Listbox {...other} ref={ref} />
    </CssTransition>
  );
});

AnimatedListbox.propTypes = {
  ownerState: PropTypes.object.isRequired,
};

const MenuItem = styled(BaseMenuItem)(
  () => `
  list-style: none;
  padding: 10px;
  border-radius: 0;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  zIndex: 10;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background-color: #1c86b1;
    color: #ffffff;
  }

  &.${menuItemClasses.disabled} {
    color: '#ffffff';
  }
  `,
);

const NestedMenuItem = styled('li')(
  () => `
  list-style: none;
  padding: 10px;
  border-radius: 0;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  zIndex: 10;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background-color: #1c86b1;
    color: #ffffff;
  }

  &.${menuItemClasses.disabled} {
    color: '#ffffff';
  }
  `,
);

const MenuButton = styled(BaseMenuButton)(
  () => `
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  color: inherit;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  zIndex: 10;

  &:hover {
    color: #d65050;
  }

  &:active {
    background: transparent;
  }

  &:focus-visible {
    outline: none;
  }
  `,
);

const DrawerMenu = ({ label, menuItems }) => {
  const [nestedOpen, setNestedOpen] = useState({});

  const handleNestedToggle = (index) => {
    setNestedOpen({ ...nestedOpen, [index]: !nestedOpen[index] });
  };

  return (
    <Dropdown>
      <MenuButton>{label}</MenuButton>
      <Menu slots={{ listbox: AnimatedListbox }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.subMenu ? (
              <>
                <MenuItem button onClick={() => handleNestedToggle(index) }>
                  <span>{item.label}</span>
                  {nestedOpen[index] ? <ExpandLess style={{ marginLeft: 'auto' }} /> : <ExpandMore style={{ marginLeft: 'auto' }} />}
                </MenuItem>
                <Collapse in={nestedOpen[index]} timeout="auto" >
                  <NestedListbox>
                    {item.subMenu.map((subItem, subIndex) => (
                      <NestedMenuItem key={subIndex}>
                        <Link to={subItem.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                          {subItem.label}
                        </Link>
                      </NestedMenuItem>
                    ))}
                  </NestedListbox>
                </Collapse>
                {nestedOpen[index] && (
                  <DrawerMenu  menuItems={item.subMenu} />
                )}
              </>
            ) : (
              <MenuItem key={item.label}>
                <Link to={item.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                  {item.label}
                </Link>
              </MenuItem>
            )}
          </React.Fragment>
        ))}
      </Menu>
    </Dropdown>
  );
};

DrawerMenu.propTypes = {
  // label: PropTypes.node.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
      subMenu: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default DrawerMenu;
