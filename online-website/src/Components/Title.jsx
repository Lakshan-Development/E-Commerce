import React from 'react'

const Title = ({txt1 , txt2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-red-600 border-2 border-blue-950 py-2 px-2 font-semibold'>{txt1} <span className='text-blue-950 font-medium font-'>{txt2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title