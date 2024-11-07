import React, { useContext } from 'react'
import { ShopContaxt } from '../Context/ShowContaxt'
import { Link }from  'react-router-dom'

const ProductItems = ({id , image , name , price}) => {

    const { currency } = useContext(ShopContaxt);
  return (
    <Link to={`/Producct/${id}`} className='text-gray-700 cursor-pointer'>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition-all ease-in-out' src={image[0]} alt="" />
        </div>

        <p className='pt-3 pb-1 text-sm text-center'>{name}</p>
        <p className='text-sm font-medium text-center text-blue-950'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItems