// contacct

function Contact(props) {
  return(
    <div>
      <h3>Name: {props.name}</h3>
      <p>Phone: {props.phone}</p>
      <hr />
    </div>//props is a result
    //props are the static
  );
}

function App(){
  return(
    <div>
      <h1>My Contact</h1>
      <Contact name = "Ermias" phone = "0913243456"/>
      <Contact name = "Keno" phone = "0913243457"/>
      <Contact name = "Delu" phone = "0913243458"/>
    </div>
  )
}

// state in change from component to component with update is called react state.
export default App;




import { values } from "lodash";
import {useState} from "react"; 

function App(){
  const [orders, setorders,] = useState(0);
   //state is count the like , share and etc by react state
   return (
    <div>
      <h1>Wabiskills Restaurant Orders</h1>
      <h2>Total Orders :{orders}</h2>
      <button onClick={()=>setOrders(orders+1)}>Add Order</button>
    </div>
   );
}

export default App;


// orders = Current values
// setOrders = change the numbers


// have current value 
// custom function

//state is dynamics




import { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  function addLike() {
    setLikes(likes + 1);
  }

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial" }}>
      <h1>EDOT Community</h1>
      <p>Show some love to this course!</p>
      
      <button 
        onClick={addLike} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        👍 Like
      </button>

      <h2 style={{ color: "#007bff" }}>Total Likes: {likes}</h2>
    </div>
  );
}

export default App;


import 