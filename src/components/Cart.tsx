import React from 'react'
import { useSelector } from 'react-redux'
import { IState } from '../store'
import { ICartItem } from '../store/modules/cart/types'


const Cart = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)
    console.log('cart aqio', cart)
  return (
    <table>
      <thead>
        <tr>Produto</tr>
        <tr>Preço</tr>
        <tr>Quantidade</tr>
        <tr>Subtotal</tr>
      </thead>
      <tbody>
      {cart.map(item => (
        <tr key={item.product.id}>
          <td>{item.product.title}</td>
          <td>{item.product.price}</td>
          <td>{item.quantity}</td>
          <td>{(item.product.price * item.quantity).toFixed(2)}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

export default Cart