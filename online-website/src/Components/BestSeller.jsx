import React, { useEffect, useState, useContext } from 'react'
import { ShopContaxt } from '../Context/ShowContaxt'
import Title from './Title'
import ProductItems from './ProductItems';

const BestSeller = () => {

    const {products} = useContext(ShopContaxt);
    const [bestSeller , setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProducts = products.filter((item) => (item.bestSeller));
        setBestSeller(bestProducts.slice(0,5))
    },[products])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title txt1={'BEST'} txt2={'SELLERS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Shop our top-selling clothes—stylish, comfortable, and always on-trend. Find your new favorite piece today!


            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {bestSeller.map((item,index) => (
                <div key={index} className='bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
                <ProductItems 
                  id={item._id} 
                  image={item.image} 
                  name={item.name} 
                  price={item.price} 
                />
              </div>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller