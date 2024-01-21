"use client"
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
import { OrderEvent } from '@/lib/actions/order.action'
import { auth, useUser } from '@clerk/nextjs'
import { useRouter } from "next/navigation"

    

const OrderButton = (event : any ) => {

  const router = useRouter();


  const {user } = useUser();
  const userId = user?.publicMetadata.userId as string;

    const orderdetail = {
        buyer: userId,
        event: event.event
    }



 
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
          const getOrder = await OrderEvent(orderdetail);
          if(getOrder){
            router.push("/profile")
          }
          else{
            alert("got some error")
            
          }
        } catch (error) {
          throw error as string
        }
  };

    
  



    
    
    
  return (
    <>
  <AlertDialog>
        <AlertDialogTrigger className='bg-orange-600 text-white p-2 rounded-xl pl-4 pr-4' >Buy Now</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
             This is an conformation message for participation in event , please click on participate if you want to procedd
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
           <form onSubmit={handleSubmit}
           >
            <AlertDialogAction type='submit' className='bg-orange-700'>Register</AlertDialogAction>
           </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  </>
  )
}

export default OrderButton
