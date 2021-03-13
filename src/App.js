import grocery from './Categories/Grocery/grocery'
import electronics from './Categories/Electronics/electronics'
import clothes from './Categories/Clothing/clothes'
import Table from './table'
import './App.css';
import Checkout from './checkout'
import { BrowserRouter as Router ,Route,useHistory} from "react-router-dom";
import React,{useState} from 'react';



function App() {
  let [purchased,setPurchased] = useState(true) 
  const history = useHistory();
  return (
    <div >
     <Route path="/" exact component={() =>
     <div className="background">
     <div className="container">
     <div className="head">
     <h1 className="Heading">Welcome to Woodys Store</h1>
     </div>
      <div className="tables">
      <Table type ="Grocery" arr={grocery}/>
      <Table type = "Electronics" arr={electronics} />
      <Table type = "Clothing" arr={clothes} />
      </div>
     </div>
     <div className="checkout">
     <button className="checkoutbtn" onClick={()=>sessionStorage.getItem("tp")!=0&&sessionStorage.getItem("tp")!==null?history.replace("/checkout"):setPurchased(false)}>Checkout</button>
     {!purchased&&<p className="buyone">Please choose a Product before checking out!</p>}
     </div>
       </div>
     } />
     <Route path="/checkout" component = {()=>sessionStorage.getItem("tp")!==null&&sessionStorage.getItem("tp")!=0&&<Checkout setpurchase={()=>setPurchased(true)}/>}/>
     </div>
  );
}

export default App;
