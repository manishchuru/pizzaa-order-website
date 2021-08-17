import React, { useState } from 'react';
import Pizzaproduct from './Pizzaproduct';
import './Card.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {useCart} from 'react-use-cart';
const Card = () => {
    const {addItem,totalItems} = useCart();
    const [searchtera,setFilter] = useState("")  
    const myfun=(e)=>{
           setFilter(e.target.value);
    }
    return (
        <section>
        <div className='control'>
        <input type="text"  onChange={myfun} placeholder='search'/>
        </div>
        <div className='pro'>
          {
            Pizzaproduct.filter((val)=>{
                if(searchtera==""){
                    return val
                } else if (val.title.toLowerCase().includes(searchtera.toLowerCase())){
                    return val;
                }
            }).map((value)=>{
           return <div className='totalpro'>
                   <img src={value.img} alt={value.alt}  className='image'/>
                    <h4>${value.price}</h4>
                    <h4>{value.title}</h4>
                   <button className='btn-danger abtn' onClick={()=>addItem(value)}> <a href="/shopping">add card</a></button>
                  </div>
              })
          }  
        </div>
        </section>
    );
}

export default Card;
