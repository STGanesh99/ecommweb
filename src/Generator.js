import React, { useState, useEffect } from 'react'





const Generator = (props) => {
   
    let [count, setCount] = useState(0)
    useEffect(() => {
        setCount(sessionStorage.getItem(props.name) != null ? JSON.parse(sessionStorage.getItem(props.name)).qty : 0)
    }, [])
    var increment = () => {
        console.log(props);
        setCount(count + 1)
        var cart = {
            item: props.name,
            price: props.price,
            qty: count + 1
        }
        var jsonStr = JSON.stringify(cart);
        sessionStorage.setItem(props.name, jsonStr);
        const tp = Number(sessionStorage.getItem("tp"))
        props.settotal(tp + Number(cart.price))
            sessionStorage.setItem("tp", tp + Number(cart.price));
    }

    var decrement = () => {
        if (count === 0) {
            return
        }
        setCount(count - 1)
        var cart = {
            item: props.name,
            price: props.price,
            qty: count - 1
        }
        if (count === 1) {
            sessionStorage.removeItem(props.name)
            const tp = Number(sessionStorage.getItem("tp"))
            sessionStorage.setItem("tp", tp - cart.price);
            window.location.reload()
            return
        }
        var jsonStr = JSON.stringify(cart);
        sessionStorage.setItem(props.name, jsonStr);
        const tp = Number(sessionStorage.getItem("tp"))
        props.settotal( tp - cart.price)
        sessionStorage.setItem("tp", tp - cart.price);
    }

    return (<td className="adjust">
        <button className="subbtn " disabled={count === 0} onClick={() => decrement()} disabled={props.t}>
            -
    </button>
        <input type="text" className="quantity" value={count}></input>
        <button className="addbtn" onClick={() => increment()} disabled = {props.t}>
            +
    </button>
    <p>
        Cost :{props.price*count}
    </p>
    </td>)
}


export default Generator

