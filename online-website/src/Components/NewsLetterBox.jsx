import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler=(event)=>{
        event.preventDefault();

    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-blue-950'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
        Get exclusive access to the latest trends, new arrivals, and special deals by subscribing to our newsletter! When you sign up today, you'll receive 20% off your first order. Don’t miss out on stylish looks at unbeatable prices—subscribe now and start shopping your favorites!
        </p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' onSubmit={onSubmitHandler} action="">
            <input type="email" name="email" id="" placeholder='Enter Your E-mail' className='w-full sm:flex-1 outline-none' required/>
            <button type='submit' className='bg-blue-950 text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox