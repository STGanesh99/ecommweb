import React, { useState ,useEffect} from 'react'
import Generator from './Generator'



const Table = (props) => {




    return (
        <div className='container'>
            <h2 className="category">
                {props.type}
            </h2>
            <table className='table'>
                <tr>
                    <th>
                        Name
         </th>
                    <th>
                        Price
         </th>
                    <th>
                        Quantity
         </th>
                </tr>
                {props.arr.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td > {item.name}</td>
                            <td>{item.cost} Rs</td>
                            <Generator name={item.name} price={item.cost} settotal = {()=>1}/>
                        </tr>)
                })}
                
            </table>
        </div>
    )
}



export default Table