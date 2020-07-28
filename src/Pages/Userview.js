import React from 'react';

function Userview(props){
    let user=JSON.parse(localStorage.getItem("user"))
    const [items,setItems]=React.useState([]);
    const [name,setName]=React.useState([]);
    const [quantity,setQuantity]=React.useState([]);
    let bought={items:[],quantity:[]};
    React.useEffect(()=>{
        fetch('http://localhost:4040/getitems')
        .then(res=>res.json())
        .then(data=>setItems(data))
        .catch(err=>console.log(err));
    },[items])
    function handleBuy(e){
        console.log("button clicked for id:",e.target.id);
        fetch(`http://localhost:4040/update/${e.target.id}`)
        .then(res=>res.json())
        .then(d=>{
                let flag=0;
                console.log("Name from server",d.name)
                
                for(let i in bought ){
                    bought[i].map((name,idx)=>{
                        console.log("checking  for ",name)
                        if(name==d.name){
                            
                            bought["quantity"][idx]+=1;
                            flag=1;
                        }

                    })
                }
                if(flag==0)
                {
                    console.log("flag is zero",d.name)
                    bought["items"].push(d.name);
                    bought["quantity"].push(1);
                    
                }
                setName(bought["items"]);
            setQuantity(bought["quantity"])
            }
              
        )
        .catch(data=>console.log(data));
        console.log(bought);
        
    }
    function handleLogout(e){
        localStorage.clear()
        props.history.push("/")
    }
    return(
        <><br/><br/>
        <div><h3>Welcome {user.name}!</h3><button className="btn btn-outline-danger" onClick={e=>handleLogout(e)}>Logout</button></div>
        <div style={{marginTop:"30px",marginBottom:"10px"}}>
            <h5 style={{textAlign:"center"}}>Products</h5>
            <button onClick={(e)=>e.disabled=true}>Check</button>
        </div>
        <div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {items.map(item=>{
                    return(
                        <tr>
                            <th scope="row">{item._id}</th>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td><button id={item._id} onClick={(e)=>handleBuy(e)}className="btn btn-outline-success">Buy 1</button></td>
                         </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
        <div>
        <h4>Purchased Now</h4>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    
                    <th scope="col">Quantity</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                {name.map((item,ind)=>{
                    return(
                        <>
                            <th scope="row">{ind}</th>
                            <td>{item}</td>
                        </>

                    )
                })}
                {quantity.map(quants=>{
                    return(
                        <>
                        <td>{quants}</td>
                        </>
                    )
                })}
                </tr>
            </tbody>
        </table>
        </div>
        </>
        
    )

}

export default Userview;