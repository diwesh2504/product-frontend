import React from 'react';
import Register from './Register';
import Login from './Login'
import AddItems from './AddItems';
import ProductListing from './ProductListing';


function LandingPage() {
  
  const [view,setView]=React.useState("login");
  
  return (
    <>
    <button className="btn btn-outline-primary" onClick={()=>setView("login")}>Login</button>
    <button className="btn btn-outline-primary" onClick={()=>setView("register")}>Register</button>
    <button className="btn btn-outline-primary" onClick={()=>setView("additems")}>Add Products</button>
    <button className="btn btn-outline-primary" onClick={()=>setView("productlisting")}>View Products</button>
    {view==="login"?<Login/>:""}
    {view==="register"?<Register/>:""}
    {view==="additems"?<AddItems/>:""}
    {view==="productlisting"?<ProductListing/>:""}
    
    </>
  );
}

export default LandingPage;
