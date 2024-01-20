import Collection from '@/components/shared/Collection';
import { Button } from '@/components/ui/button';
import { getAllevents, getEventById } from '@/lib/actions/event.action'
import { SearchParamProps } from '@/types'
import Image from 'next/image';
import React from 'react'

const page = async( {params: {id}}: SearchParamProps ) => {

  const events = await getAllevents({
    query:'',
    category:'',
    page:1,
    limit:5
  });




    const event = await getEventById(id);
    

   
    
  return (
    <>
    <div className='flex justify-center items-start w-full'>
      <div className=' bg-teal-50 ml-80'>
      <Image src={event.imageUrl} height={1000} width={1000} alt='imageurl' />
      </div>
      <div>


        <div className='pr-60 pl-10 bg-slate-200'>
          <h1 className='text-5xl font-extrabold text-gray-800' >{event.title}</h1>
          <div className='flex gap-4'>
          <div className='mt-6 bg-yellow-100 rounded-full flex items-center justify-center w-16'>
            {
              event.eventType == 'free' ? <p  className='font-medium text-gray-800' >Free</p> : <p  className='font-medium text-gray-800' >{event.category}</p>
            }
          </div>
          <div className='mt-6 bg-green-100 rounded-full flex items-center justify-center w-24'>
            <p  className='font-medium text-gray-800' >{event.category}</p>
          </div>
          </div>

          {/* Get Ticket Feature */}
          <Button className='mt-8' >
            Apply Now
          </Button>

          <div className='mt-10'>
            <p>{event.detail}</p>
          </div>
        </div>

      </div>
      
    </div>
    <div>
      <div className="h-28 w-full bg-slate-200 flex justify-between pl-8 items-center pr-8">
    <h1 className="text-2xl font-bold text-gray-900 ml-56">
      Related Events
    </h1>
  
      </div>
      <Collection 
      data={events?.data}
      emptyTitle="No events found"
      emptySubtitle="There is no Events for now , Please come back later"
      collectionTypes="ALL_EVENTS"
      limit={6}
      page={1}
      totoalPages={2}
      urlParams=''
      />
    </div>
    </>
  )
}

export default page
