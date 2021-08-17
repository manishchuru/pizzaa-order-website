import React from 'react';
import './Card.css';
import { useCart } from 'react-use-cart';
import './shopping.css'
const Shopping = () => {
    const {
        isEmpty,
        totalItems,
        items,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        emptyCart,
        removeItem
    } = useCart();
    return (
      <section className='py-4 container  choose'>
      <div className="row justify-content-center">
      <div className="col-12">
      <h5>Cart({totalUniqueItems}) total items: ({totalItems})</h5>
      <table className='table table-light table-hover m-0'>
      <tbody>
      {items.map((value)=>{
       return(   <tr>
          <td>
          <img src={value.img} alt={value.alt} />
          </td>
          <td>{value.price}</td>
          <td>quantity{value.quantity}</td>
          <td>
          <button 
          className='btn-danger add'
          onClick={()=> updateItemQuantity(value.id , value.quantity-1)}>-</button>
          <button  className='btn-dark sub' 
          onClick={()=> updateItemQuantity(value.id , value.quantity+1)}
          >+</button>
          <button className='btn-info remo'
           onClick={()=>removeItem(value.id)}>delete</button>
          
          </td>
          </tr>
       )
      })}
      </tbody>
      </table>
      </div>
      <div className="col-auto">
      <h2>Total price:${cartTotal}</h2>
      </div>
      <div className="col-auto">
      <button className="btn-info"
      onClick={()=>{emptyCart()}}> clear cart</button>
      </div>
      <button className="btn-primary col-2">Buy now</button>
      </div>
      </section>
    );
}

export default Shopping;
