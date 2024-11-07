import React, { useContext, useEffect, useState } from 'react'
import { ShopContaxt } from '../Context/ShowContaxt'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContaxt);
    const [ visible, setVisible ] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true);
        }else{
            setVisible(false)
        }
    },[location])
    
    return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" name="" id="" placeholder='Serach' className='flex-1 outline-none bg-inherit text-sm' />
            <img src="" alt="" />
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ):null
}

export default SearchBar