import { getEventById } from '@/lib/actions/event.action'
import { SearchParamProps } from '@/types'
import React from 'react'

const page = async( {params: {id}}: SearchParamProps ) => {


    const event = await getEventById(id);

    console.log(event);
    
  return (
    <div>
      this is event profile page
    </div>
  )
}

export default page
