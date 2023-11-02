
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
function SideNav({collapsed, handleCollapsed}) {

  return (
    <div style={{ display: "flex", height: "100vh", minHeight: "400px", zIndex: 10 }}>
      <Sidebar collapsed={collapsed} collapsedWidth="60px" backgroundColor="#1E1E1E"  >
        <Menu onClick={handleCollapsed}>
          <SubMenu label="Charts">
            <MenuItem > Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideNav;
