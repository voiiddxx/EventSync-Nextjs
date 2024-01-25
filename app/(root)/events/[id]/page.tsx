
import Collection from '@/components/shared/Collection';
import { Button } from '@/components/ui/button';
import { getAllevents, getEventById } from '@/lib/actions/event.action'
import { SearchParamProps } from '@/types';
import Image from 'next/image';
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import OrderButton from '@/components/shared/OrderButton';
import { formatDateTime } from '@/lib/utils';
import Link from 'next/link';



const page = async( {params: {id}}: SearchParamProps ) => {

  const events = await getAllevents({
    query:'',
    category:'',
    page:1,
    limit:5
  });

    const event = await getEventById(id);



    const returnAlertDialogueBox = () => {
      return <AlertDialog>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    
    }

  return (
    <>

    <div className='min-h-screen w-full'>
        <div className='flex items-center justify-center' >
         <div className='h-[400px] w-[1000px] bg-white mt-6 rounded-lg'>
         <Image 
          src={event.imageUrl}
          alt="hero image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center rounded-md p-2"
        />
         </div>
        </div>

        {/* text area and other details */}

        <div className='ml-[270px] mt-4' >
         <div className='flex justify-between mr-[270px]'>
         <div>
            <p className='text-blue-700 font-semibold'>{formatDateTime(event.startDate).dateTime}</p>
            <h1 className='text-2xl font-semibold mt-2'>
              {event.title}
            </h1>
            <div className='flex gap-4 mt-3'>
          <div className='h-10 bg-green-200 w-24 flex justify-center items-center rounded-xl'>
            <p className='font-bold text-green-800'>Unpaid</p>
          </div>
          <div className='h-10 bg-red-200 w-24 flex justify-center items-center rounded-xl'>
            <p className='font-bold text-red-800'>{event.category}</p>
          </div>
         </div>
          </div>

          <div className='h-28 w-64  bg-gray-100 rounded-lg flex items-center justify-center flex-col gap-2'>
                <h3 className='font-semibold text-blue-900'>Ammount: {
                    event.price == '' ? 'No Fees' : event.price
                }
                </h3>
               <OrderButton event={event._id}/>
          </div>
         </div>
         <div className='w-[500px] mt-6'>
          <h3 className='text-orange-600 font-bold mb-2'>Overview</h3>
          <p className='font-medium text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis tempora ab, corrupti nihil fuga ea doloremque aut inventore perferendis placeat, blanditiis officia in pariatur nisi, sed consequuntur cupiditate ipsa nam quidem incidunt optio quasi! Ab ducimus beatae ipsam sunt, aliquid dolor ut explicabo rerum, quasi sequi quia nam, quas illum.</p>
         </div>


         <div className='h-12 w-60 bg-green-100 mt-4 rounded-xl flex items-center justify-center'>
              <p className='font-bold text-green-950'> <span className='font-medium text-black'>Created By |</span> {event.organizer.username}</p>
         </div>

         <div>
          <h2 className='mt-8 font-bold'> 🚀 {event.location}</h2>
         </div>

         <div>
          <p className='mt-6 text-lg' >Event Link : <span className='text-blue-800 font-semibold'>
            <Link href={event.url}>{event.url}</Link></span></p>
         </div>
        </div>
        <div className='mt-10'>

        </div>

    </div>



    {/* Related event section */}
   
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
