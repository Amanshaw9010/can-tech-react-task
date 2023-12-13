import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {
    const searchquery = useSearchParams()[0]
    const referenceNum = searchquery.get("reference")
  return (
    <div className=' flex flex-col justify-center items-center align-middle'>
        <h1>Order Successfull</h1>
        <h3>Reference No.: {referenceNum}</h3>
    </div>
  )
}

export default PaymentSuccess