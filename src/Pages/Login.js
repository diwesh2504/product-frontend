import React from 'react';
import {useHistory} from'react-router-dom';
function Login(){
    const history=useHistory();
    console.log(history);
    function handleSubmit(e){
        e.preventDefault();
        let getEmail=document.getElementById('email').value;
        let getPass=document.getElementById('pass').value;
        fetch(`http://localhost:4040/users/${getEmail}`)
        .then(res=>res.json())
        .then(data=>{
            localStorage.setItem("user",JSON.stringify(data));
            alert("Login Success :)")
            history.push("/userview");
        })

    }
    return(
        <>
        <h1>User Login</h1>
        <div className="container mx-5 my-5">
        <div className="row">
            <div className="col"></div>
            <div className="col">
        <form onSubmit={e=>handleSubmit(e)}>
        <div className="form-group">
            <label htmlFor="email">Enter Email ID</label>
            <input type="text" className="form-control" id="email" placeholder="Enter Valid Email ID.."/>
        </div>
        <div className="form-group">
            <label htmlFor="pass">Enter Password</label>
            <input type="password" className="form-control" id="pass" placeholder="Enter Password.."/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary">Register</button>
        </div>
        </form>
        </div>
        <div className="col"></div>
        </div>
        </div>
        </>
    )

}

export default Login;