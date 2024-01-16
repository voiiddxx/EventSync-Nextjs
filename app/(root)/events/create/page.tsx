import Eventform from "@/components/shared/Eventform"

const page = () => {


  return (
    <div className="min-h-screen w-full bg-slate-50">
     <div className="h-20 w-full bg-slate-200 flex items-start justify-center flex-col pl-14">
        <h1>Create Event</h1>
        <p>Please fill all the imformation details to crerate Event</p>
     </div>
     <div className="min-h-[650px] w-full bg-white flex justify-center items-center">
     <Eventform/>
     </div>
    </div>
  )
}

export default page
