import React, { useContext, useEffect, useState } from 'react'
import { ShopContaxt } from '../Context/ShowContaxt'
import Title from './Title'
import ProductItems from './ProductItems';

const LatestCollection = () => {
    const { products } = useContext(ShopContaxt);
    const [latetstProducts,setLatetstProducts] = useState([]);

    useEffect(() => {
        setLatetstProducts(products.slice(0, 10));
    }, [products])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title txt1={'LATEST'} txt2={'COLLECTIONS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Shop our newest arrivals! From trendy essentials to statement pieces, discover fresh styles that will elevate your wardrobe this season.
            </p>
        </div>

        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {latetstProducts.map((item,index) => (
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

export default LatestCollection