import React, { useContext, useEffect, useState } from 'react'
import { ShopContaxt } from '../Context/ShowContaxt'
import Title from '../Components/Title'
import ProductItems from './ProductItems'

const RelatedProducts = ({category,subCategory}) => {

    const { products } = useContext(ShopContaxt);
    const [ related, setRelated ] = useState([]);

    useEffect(()=>{
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item)=>category === item.category);
            productsCopy = productsCopy.filter((item)=>subCategory === item.subCategory);
            setRelated(productsCopy.slice(0,5))
        }
    },[products])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title txt1={"RELATED"} txt2={"PRODUCTS"} />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item,index)=>(
                <div key={index} className='bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
                <ProductItems 
                  id={item._id} 
                  image={item.image} 
                  name={item.name} 
                  price={item.price} 
                />
              </div>
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts