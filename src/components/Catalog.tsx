import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import api from '../services/api'
import { addProductToCartRequest } from '../store/modules/cart/actions'
import { IProduct } from '../store/modules/cart/types'
import CatalogItem from '../components/CatalogItem'

const Catalog = () => {
  const dispatch = useDispatch()
  const [catalog, setCatalog] = useState<IProduct[]>([])

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, [])

  return (
    <main>
      <h1>Catalog</h1>  
    
      {catalog.map(product => (
       <CatalogItem key={product.id} product={product}/>
      ))}
    </main>
    
  )
}

export default Catalog;