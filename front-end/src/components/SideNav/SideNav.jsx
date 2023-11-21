import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { BiMenu } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { LiaBoxesSolid } from "react-icons/lia";
import { MdOutlineHolidayVillage } from "react-icons/md";
import { Link } from "react-router-dom";
import {  useState } from "react";
import { MdHistory } from "react-icons/md";

function SideNav({branches}) {
  const [toggle, setToggle] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const handleToggle = () => {
    setToggle(!toggle);
    setCollapsed(false);
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
              icon={<MdHistory  size={30} />}
              component={<Link to="/history" />}
            >
              History
            </MenuItem>
            <MenuItem
              icon={<LiaBoxesSolid size={30} />}
              component={<Link to="" />}
            >
              Main Stock
            </MenuItem>
            <SubMenu
              key="branches"
              icon={<MdOutlineHolidayVillage size={30} />}
              label="Branches"
            >
              {/* <MenuItem key="addBranch">Add Branch +</MenuItem> */}
              {branches ? branches.map((branch) => (
                <MenuItem key={branch.branch_id} component={<Link to={`/branch/${branch.branch_id}`} />} >{branch.branch_name}</MenuItem>
              )): null}
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}

export default SideNav;
