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