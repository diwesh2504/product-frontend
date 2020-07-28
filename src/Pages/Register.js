import React from 'react';
function Register(){

    function handleSubmit(e){
        e.preventDefault();
        let new_name=document.getElementById("newname").value;
        let new_email=document.getElementById("newemail").value;
        let new_pass=document.getElementById("newpass").value;
        let json_data={
            name:new_name,
            password:new_pass,
            email:new_email
        }
        let flag=0;
        fetch(`https://product-task.herokuapp.com/users`)
        .then(res=>res.json())
        .then(data=>{
          data.map(each=>{
            
            if(each.email==new_email)
              flag=1;
          })
          check();
        })
        .catch(err=>console.log(err));
        const check=async ()=>{if(flag===1)
        {
          alert("Email Already Registered");
          return;
        }
       else{
          
          fetch(`https://product-task.herokuapp.com/register`,{
              method:'POST',
              body:JSON.stringify(json_data),
              headers:{
                "Content-type": "application/json; charset=UTF-8"
              }
          })
          .then(data=>{
              alert("New User Registered Successfully!")
          })
          .catch(err=>alert("Something went wrong,Please try Again :("))
        }
      }

    }

    return(
        <>
        <div><h1>New User Registration</h1></div>
        <div className="container mx-5 my-5">
        <div className="row">
            <div className="col"></div>
            <div className="col">
        <form onSubmit={e=>handleSubmit(e)}>
        <div className="form-group">
            <label htmlFor="newname">Enter Name</label>
            <input type="text" className="form-control" id="newname" placeholder="Please Enter Your Name.."/>
        </div>
        <div className="form-group">
            <label htmlFor="newemail">Enter Email ID</label>
            <input type="text" className="form-control" id="newemail" placeholder="Enter Valid Email ID.."/>
        </div>
        <div className="form-group">
            <label htmlFor="newpass">Enter Password</label>
            <input type="password" className="form-control" id="newpass" placeholder="Set a Password.."/>
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

export default Register;