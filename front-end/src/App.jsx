import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import { Outlet } from "react-router-dom";


function App() {  
 
  return ( 
    <>
      <SideNav />
      <div className="mx-auto"><Outlet/></div> 
      

      
    </>
  );
}

export default App;
