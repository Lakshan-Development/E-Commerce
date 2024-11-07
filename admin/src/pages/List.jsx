import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backEndUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const List = ({token}) => {

  const [list,setlist] = useState([])
  const fetchList = async () => {
      try {
        const response = await axios.get(backEndUrl + '/api/product/list')
        if (response.data.success) {
          setlist(response.data.products);
        }
        else{
          toast.error(response.data.message)
        }
        
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
  }

  const removeProduct = async (id) => {
      try {
        const response = await axios.post(backEndUrl + '/api/product/remove',{id},{headers:{token}})
        if (response.data.success) {
          toast.success(response.data.message)
          await fetchList();
        }
        else{
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error);
        toast.error(response.data.message)
      }
  }

  useEffect(() => {
      fetchList()
  },[])

  return (
    <div>
      <p className='mb:2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        {/* List Table Title */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-blue-600 text-white text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>
        {/* Product List */}
        {
          list.map((item,index) => (
              <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm bg-blue-400'>
                <img className='w-12' src={item.image[0]} alt="" />
                <p className='text-white'>{item.name}</p>
                <p className='text-white'>{item.category}</p>
                <p className='text-white'>{currency}{item.price}</p>
                <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default List