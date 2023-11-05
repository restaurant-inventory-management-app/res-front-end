import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { BiMenu } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { LiaBoxesSolid } from "react-icons/lia";
import { MdOutlineHolidayVillage } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

function SideNav() {
  const [toggle, setToggle] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const handleToggle = () => {
    setToggle(!toggle);
    setCollapsed(false)
  };

  return (
    <>
      <div
        className="d-sm-none"
        style={{
          paddingLeft: 5,
          paddingTop: 5,
          position: "absolute",
        }}
        onClick={handleToggle}
        
      >
        <BiMenu size={30} />
      </div>

      <div style={{ display: "flex", minHeight: "400px" }}>
        <Sidebar
          collapsed={collapsed}
          collapsedWidth="75px"
          backgroundColor="#1E1E1E"
          width="230px"
          breakPoint="sm"
          toggled={toggle}
          onBackdropClick={() => {
            setToggle(false);
          }}
        >
          <Menu
            menuItemStyles={{
              button: ({ level, active }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                  return {
                    color: active ? "black" : "white",
                    blockSize: 70,
                    ":hover": { color: "#1E1E1E" },
                  };
              },
              label: () => {
                return {
                  paddingLeft: 25,
                };
              },
            }}
          >
            <MenuItem icon={<BiMenu size={30} />} onClick={handleCollapsed}>
              Menu
            </MenuItem>
            <MenuItem
              icon={<IoMdNotificationsOutline size={30} />}
              component={<Link to="/notification" />}
            >
              Notification
            </MenuItem>
            <SubMenu icon={<BsPerson size={30} />} slot label="Profile">
              <MenuItem> Profile </MenuItem>
            </SubMenu>
            <MenuItem
              icon={<LiaBoxesSolid size={30} />}
              component={<Link to="/main" />}
            >
              Main Stock
            </MenuItem>
            <SubMenu
              icon={<MdOutlineHolidayVillage size={30} />}
              slot
              label="Branches"
            >
              <MenuItem>Siam Paragon</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}

export default SideNav;
