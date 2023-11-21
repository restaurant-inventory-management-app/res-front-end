import { useEffect, useState } from "react";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import axios from 'axios'


function App() {  
  const [branches, setBranches] = useState(null)
  useEffect(()=>{
    const url = 'http://192.168.1.49:5000/api/v1/branch'
    axios.get(url)
    .then((response) => {
      setBranches(response.data);
    })
    .catch((error) => console.error("Error fetching data:", error));
  },[])
  
  return ( 
    <>
    <SideNav branches={branches} />
      <div className="mx-auto"><Outlet/></div> 
      

      
    </>
  );
}

export default App;
