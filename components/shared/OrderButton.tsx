
import React from 'react'
import { Button } from '../ui/button'
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
import { auth } from '@clerk/nextjs'
import { OrderEvent } from '@/lib/actions/order.action'

    

const OrderButton = (event : any ) => {
    
  const {sessionClaims} = auth();

  const userId = sessionClaims?.userId as string;


    const order = {
        buyer: userId,
        event: event.event
    }


    const participateInEvent = async () => {
        try {
            const getOrder = await OrderEvent(order);
        } catch (error) {
            console.log(error);
            throw new Error("some error occured");
        }
    }

    
    
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
            <AlertDialogAction className='bg-orange-700'>Register</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
  </>
  )
}

export default OrderButton
