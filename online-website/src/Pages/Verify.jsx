import React, { useContext, useEffect } from 'react'
import { ShopContaxt } from '../Context/ShowContaxt'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Verify = () => {

    const { navigate, token, setCartItems, backEndUrl } = useContext(ShopContaxt)
    const [searchParams, setSerachParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
        try {
            if (!token) {
                return null
            }

            const response = await axios.post(backEndUrl+'/api/order/verifyStripe',{success,orderId},{headers:{token}});
            if (response.data.success) {
                setCartItems({})
                navigate('/order')
            }
            else {
                navigate('/cart')
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
            
        }
    }

    useEffect(() => {
        verifyPayment()
    },[token])
  return (
    <div>
        
    </div>
  )
}

export default Verify