import Collection from "@/components/shared/Collection"
import { Button } from "@/components/ui/button"
import { getAllevents, getEventById, getEventcreatedbyUser } from "@/lib/actions/event.action";
import { getuserOrder } from "@/lib/actions/order.action";
import { auth } from "@clerk/nextjs";

const page = async () => {


  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;


 



  const userEvents = await getEventcreatedbyUser({
    userId:userId,
    page:1,
    limit:6
  });
  
  const orders = await getuserOrder(userId);
  let orderData = [];
  for(let i =0;i<orders.length;i++){
    orderData.push(orders[i].event);
  }



  return (
    <>
    <div>
      <div className="h-28 w-full bg-slate-200 flex justify-between pl-8 items-center pr-8">
    <h1 className="text-2xl font-bold text-gray-900">
      Participated Events
    </h1>
    <Button  className="bg-blue-800 h-10 rounded-full">Explore More Events</Button>
      </div>
      {
        orders && (
          <Collection 
      data={orderData}
      emptyTitle="No events found"
      emptySubtitle="There is no Events for now , Please come back later"
      collectionTypes="MY_TICKET"
      limit={6}
      page={1}
      totoalPages={2}
      urlParams=''
      />
        )
      }
    </div>
    {/* EVents Created by user */}
    <div>
      <div className="h-28 w-full bg-slate-200 flex justify-between pl-8 items-center pr-8">
    <h1 className="text-2xl font-bold text-gray-900">
      Your Events
    </h1>
    <Button  className="bg-blue-800 h-10 rounded-full">Create Events</Button>
      </div>
      <Collection 
      data={userEvents?.data}
      emptyTitle="No events found"
      emptySubtitle="There is no Events for now , Please come back later"
      collectionTypes="EVENT_ORGANIZED"
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
