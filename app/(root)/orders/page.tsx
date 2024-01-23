import { getOrderdetailbyeventId } from '@/lib/actions/order.action';
import React from 'react'

const page = async ({searchParams} : {
    searchParams:{
        eventId:string;
    }
}) => {

    console.log("this is" , searchParams.eventId);

    const orderdetail = await getOrderdetailbyeventId(searchParams.eventId);
    
    
    
  return (
    <div>
      <h1>this is order page</h1>
    </div>
  )
}

export default page
