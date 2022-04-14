import React, {useCallback} from 'react'
import {IProduct} from '../store/modules/cart/types'
import {addProductToCartRequest} from '../store/modules/cart/actions'
import {useDispatch, useSelector} from 'react-redux'
import { IState } from '../store'

interface CatalogItemProps{
  product: IProduct
}

const CatalogItem:React.FC<CatalogItemProps> = ({product}) => {
  const dispath = useDispatch()

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id)
  })

  const handleAddProductToCart = useCallback(() => {
    dispath(addProductToCartRequest(product));
  }, [dispath,product])

  return (
    <article>
      <strong>{product.title}</strong>
      <strong>{product.price}</strong>

  
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
      
      {hasFailedStockCheck && <span style={{color: 'red'}}>Falta de estoque</span>}
    </article>
  )
}

export default CatalogItem