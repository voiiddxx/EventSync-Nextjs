import Eventform from "@/components/shared/Eventform"
import { auth } from "@clerk/nextjs";

const page = async () => {



  const {sessionClaims} = auth();

  const userId = sessionClaims?.userId as string;

  
  return (
    <div className="min-h-screen w-full ">
      
     <div className="h-20 w-full flex items-start justify-center flex-col pl-14 mt-9">

        <h1 className="font-bold text-2xl ml-80" >Create Event</h1>

        <p className="ml-80 font-normal text-gray-700">Please fill all the imformation details to crerate Event</p>

     </div>

     <div className="min-h-[650px] w-full bg-white flex justify-center items-center">

     <Eventform userId={userId}/>

     </div>
    </div>
  )
}

export default page
