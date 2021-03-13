import React, { useState ,useEffect} from 'react'
import Generator from './Generator'
import Card from './card'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import {useHistory} from 'react-router-dom'
const Checkout = (props) => {
    const history = useHistory();
    const { width, height } = useWindowSize()
    let [total, setTotal] = useState(0)
    let [placed, setPlaced] = useState(false)
    let [confetti,setconfetti] = useState(false)
    var values = []
    var keys = Object.keys(sessionStorage)
    var i = keys.length;
    useEffect(() => {
        setTotal(sessionStorage.getItem("tp"));
        props.setpurchase(true)
        }, [])
    while (i--){
        values.push(sessionStorage.getItem(keys[i]));
    }
    return (
        <>
        <div className="checkoutbackground">
        {!confetti&&<p className="dummy">1</p>}
        {placed&&
            <Confetti
          width={width}
          height={height}
          run = {confetti}
           /> }
          
           {confetti&&setTimeout(()=>setconfetti(false),5000)}
            <div className="products">
            <div className="headcheck">
            <h1 className="checkoutheading">Your Order For the Session</h1>
            </div>
                {values.length != keys.length ? <p>Loading...</p> : values.map((string) => {
                    var obj = JSON.parse(string)
                    return (Object.keys(obj).length === 3 && <div className="product">
                        <h2>{obj.item}</h2>
                        <Generator name={obj.item} price={obj.price} settotal = {val=>setTotal(val)} t ={placed}  />
                    </div>)
                })}
            </div>  
                <p className="total">Total Cost For The Order : {total} Rs</p>
                <button className="changeorder" disabled = {placed} onClick={() =>history.replace("/")}>
                Change Your Order
                </button>
                <br/>
                    <button className="place" disabled = {placed} onClick={() =>{setPlaced(true);setconfetti(true)}}>
                        Place Order
                </button>
            {
                placed && <Card/>
            }
            {
                placed&&<button className="anotherorder" disabled = {!placed} onClick={() =>{sessionStorage.clear();history.replace("/");}}>Place Another Order</button>
            }
        </div>
        </>
    )
}

export default Checkout
