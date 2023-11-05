import "./App.css";
import MainStock from "./pages/MainStock/MainStock";
import SideNav from "./components/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import { useState } from "react";


function App() {  
 
  return ( 
    <>
      <SideNav />
      <div className="mx-auto"><Outlet/></div> 
      

      
    </>
  );
}

export default App;
