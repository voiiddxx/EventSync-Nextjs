import { IEvent } from "@/lib/database/models/event.model"
import Image from "next/image"


type cardprops = {
  curr: IEvent
}

const Card = ({curr} : cardprops) => {

  console.log("this is " ,curr);
  
  return (
    <div className="h-80 w-80 bg-white flex flex-col rounded-md">
      <div className="h-32 w-full bg-red-900">
       <Image src={curr.imageUrl} height={1000} width={1000} className="h-full w-full" alt="banner"/>
      </div>
     <div className="flex ">  
     <div className="bg-yellow-200 w-20 flex items-center justify-center mt-3 ml-4 rounded-md">
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
     <div className="mb-3">
      <p className="text-gray-500 text-sm">Created By | {curr.organizer.username}</p>
     </div>

     </div>
      
    </div>
  )
}

export default Card
