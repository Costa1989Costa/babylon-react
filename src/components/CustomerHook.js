import React from 'react'
import {useState,useEffect} from 'react'
import { useFetch } from './useFetch';

const url = 'https://cours-api.netlify.app/api/javascript-store-products';

 
const CustomerHook = () => {
const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? 'loading...' :'data'}</h2>
    </div>
  )
}

export default CustomerHook
