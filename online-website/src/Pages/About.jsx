import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title txt1={'ABOUT'} txt2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At <span className='text-blue-950 font-bold'>CRAVIX</span>, we believe that fashion should be effortless, accessible, and always on trend. Our curated collection of clothing is designed for every occasion, blending timeless styles with the latest trends.
          Whether you're looking for everyday essentials or something special, we offer high-quality, comfortable pieces that fit your lifestyle.</p>
          <p>We are passionate about bringing you the best in fashion—crafted for all body types, designed with attention to detail, and made to last.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is simple: to provide high-quality, stylish clothing that fits seamlessly into your everyday life. We’re committed to delivering comfort, versatility, and affordability in every item we create, while celebrating individuality 
            and self-expression. At <span className='text-blue-950 font-bold'>CRAVIX</span>, we aim to make fashion accessible for all, empowering you to express your unique style with confidence.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title txt1={'WHY'} txt2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We prioritize quality in everything we do. Our clothing is made from premium materials, carefully crafted to ensure durability, comfort, and long-lasting wear. We thoroughly inspect every item for the perfect fit and finish,
            so you can shop with confidence knowing you're getting top-tier fashion at an unbeatable value.</p>
        </div> 
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shopping with us is a breeze. With a user-friendly website, fast and secure checkout, and a variety of payment options, we make it simple to find and purchase the perfect pieces. Plus, our easy returns and quick shipping
             ensure you have a hassle-free shopping experience from start to finish.</p>
        </div>
        <div className='border px-10 md:px-16 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Your satisfaction is our priority. Our dedicated customer support team is here to assist with any questions or concerns, providing personalized service every step of the way. Whether you need style advice, order assistance, 
            or a quick solution to an issue, we’re always here to help and ensure you have a seamless experience.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About