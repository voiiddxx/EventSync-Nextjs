import { IEvent } from "@/lib/database/models/event.model"
import Image from "next/image"
import Link from "next/link"


type cardprops = {
  curr: IEvent
  hasOrderLink?:boolean
  allEvents:boolean
  OrganizedEvent:boolean
}

const Card = ({curr , hasOrderLink , allEvents , OrganizedEvent} : cardprops) => {
  
  return (
    <div className="h-80 w-80 bg-white flex flex-col rounded-md">
      <div className="h-40 w-full">
       <Image src={curr.imageUrl} height={1000} width={1000} className="h-full w-full rounded-tl-lg rounded-tr-xl" alt="banner"/>
      </div>
     <div className="flex ">  
     <div className="bg-yellow-200 w-12 flex items-center justify-center mt-3 ml-4 rounded-md">
       {
        curr.eventType=="free" ?  <p className="text-sm text-grey">free </p> :  <p className="text-sm text-grey">{curr.price}</p>
       }
      </div>
     <div className="bg-green-200 w-20 flex items-center justify-center mt-3 ml-4 rounded-md">
        <p className="text-sm text-grey">Academic</p>
      </div>
     </div>
     <div className="h-full w-full ml-5 flex flex-col justify-between">
     <div>
     <h4 className="mt-3 text-gray-700 text-sm">Tue 24 Nov 2:00 PM</h4>
      <h1 className="mt-2 font-bold">{curr.title}</h1>
     </div>
     <div className="mb-3 flex justify-between">
     {
      allEvents && (
        <p className="text-gray-500 text-sm">Created By | {curr.organizer.username}</p>
      )
     }
     {
      OrganizedEvent && (
        <p className="text-gray-500 text-sm">Created By | {curr.organizer.username}</p>
      )
     }
      {
      hasOrderLink && (
      <Link href={{
        pathname:'/orders',
        query:{
          'eventId':curr._id
        }

      }}>
      <p className="text-gray-500 text-sm mr-11">order details</p>
      </Link>
      )   
      }
      
     </div>

     </div>
      
    </div>
  )
}

export default Card
