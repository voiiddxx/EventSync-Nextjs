import { getOrderdetailbyeventId } from '@/lib/actions/order.action';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

const page = async ({searchParams} : {
    searchParams:{
        eventId:string;
    }
}) => {
    const orderdetail = await getOrderdetailbyeventId(searchParams.eventId);
    
    
    

    if(orderdetail.length<1){
        return (
        <div className='h-16  bg-gray-200 mt-9 rounded-md flex justify-center items-center flex-col p-14'>
            <h1 className='text-orange-400 font-bold' >No data available</h1>
            <p>Please Try Again after Some time</p>
        </div>
        )
    
        }
    
  return (
    <div>
      <div className='h-20 w-full bg-slate-100 flex items-center pl-64'>
    <h1 className='font-bold text-2xl text-gray-800' >Order Details</h1>
      </div>
      <div className='min-h-screen qw-full flex justify-center items-start mt-12'>
        <div>
               {
                orderdetail.map((curr : any , index : any )=>{
                    return <Table key={index}>
                    <TableCaption className='mt-12' >All the event orders details of event id {searchParams.eventId}</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[300px]">OrderID</TableHead>
                        <TableHead className='text-left w-[200px]'>buyer Username</TableHead>
                        <TableHead className="text-left w-[300px]">Participant Email</TableHead>
                        <TableHead>BuyerID</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                        <TableCell className="font-medium">{curr._id}</TableCell>
                        <TableCell>{curr.buyer.username}</TableCell>
                        <TableCell>{curr.buyer.email}</TableCell>
                        <TableCell className="text-right">{curr.buyer._id}</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                })
               }
        </div>

      </div>

    </div>
  )
}

export default page
