import React from 'react'
import { Menu, SubMenu, MenuItemLink } from '../../admiral'

const CustomMenu = () => {
    return (
        <Menu>
            <MenuItemLink
                icon="FiUsers"
                name="Users"
                to="/crud-users"
                //badge={{ count: 15, status: 'error' }}
            />
            <MenuItemLink
                icon="FiActivity"
                name="Games"
                to="/crud-games"
                // badge={{ count: 15, status: 'error' }}
            />
            <MenuItemLink icon="FiSidebar" name="GameCards" to="/crud-with-custom-drawer" />
        </Menu>
    )
}

export default CustomMenu
