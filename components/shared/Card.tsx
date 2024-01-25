"use client"

import { IEvent } from "@/lib/database/models/event.model"
import { formatDateTime } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react"
import axios from 'axios';
import { editEvents } from "@/lib/actions/event.action"
import { useRouter } from "next/navigation"



type cardprops = {
  curr: IEvent
  hasOrderLink?:boolean
  allEvents:boolean
  OrganizedEvent:boolean
}

const Card = ({curr , hasOrderLink , allEvents , OrganizedEvent} : cardprops) => {

  const [ImageToSubmit, setImageToSubmit] = useState<any>();
  const router = useRouter();

  
 

  const formSchema = z.object({
    title: z.string().min(2).max(50),
    detail:z.string().min(10).max(400),
    price:z.string().min(2).max(5),
    url: z.string().min(5).max(50),
    startDate: z.date(),
    endDate: z.date(),

  })


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      detail:'',
      price:'',
      url:'',
      startDate: new Date,
      endDate:  new Date

    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {

    if(ImageToSubmit!=null){

      let formdata = new FormData();
      formdata.append("file" , ImageToSubmit[0]);
      formdata.append("upload_preset" , "pdrcp1le");
      const response = await axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload" , formdata ,);
      const imagedata = await response.data;
 
        const newEvent = await editEvents({event:{
          ...values,
           imageUrl: imagedata.url,
          _id: curr._id,
        },
        
         path:`/events/${curr._id}`})

        if(newEvent){
          form.reset();
          router.push(`/events/${newEvent._id}`)
        }


        
    }
    console.log(values)
  }
  
  return (
    <div className="h-80 w-80 bg-white flex flex-col rounded-md">
      <div className="h-40 w-full">
       <Link href={`/events/${curr._id}`}>
       <Image src={curr.imageUrl} height={1000} width={1000} className="h-full w-full rounded-tl-lg rounded-tr-xl" alt="banner"/>
       </Link>
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
     <h4 className="mt-3 text-gray-700 text-sm">{formatDateTime(curr.startDate).dateTime}</h4>
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
          <Sheet>
    <SheetTrigger><p className="text-blue-900 font-bold">Edit Event</p></SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit Event Details</SheetTitle>
      </SheetHeader>
     <div className="mt-8">
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
       
              <FormControl>
                <Input placeholder="Event Title" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="detail"
          render={({ field }) => (
            <FormItem>
        
              <FormControl>
                <Input placeholder="Event Details" {...field} />
              </FormControl>
             
              <FormMessage />

            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
          
              <FormControl>
                <Input placeholder="Event price" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
          
              <FormControl>
                <Input placeholder="Event url" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
        control={form.control}
        name="startDate"
        render={({ field }) => (
          <FormItem >
            <FormControl>
            <div className=" h-10  bg-white rounded-md flex justify-start items-center gap-6 px-2" >
           <h4>Select Start Date</h4>
           <DatePicker className="w-32"
           showTimeSelect
           timeInputLabel="Time"
           dateFormat="MM/dd/yyyy h:mm aa"
           wrapperClassName="DatePicker"
           selected={field.value} onChange={(date: Date) => field.onChange(date)} />
            </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control}
        name="endDate"
        render={({ field }) => (
          <FormItem >
            <FormControl>
            <div className=" h-10  bg-white rounded-md flex justify-start items-center gap-6 px-2" >
           <h4>Select Start Date</h4>
           <DatePicker className="w-32"
           showTimeSelect
           timeInputLabel="Time"
           dateFormat="MM/dd/yyyy h:mm aa"
           wrapperClassName="DatePicker"
           selected={field.value} onChange={(date: Date) => field.onChange(date)} />
            </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

<div className="h-44 w-80 bg-white rounded-md flex flex-col justify-center items-center">
         <Input onChange={(e)=>{
          setImageToSubmit(e.target.files);
         }} className="bg-slate-400 w-56" type="file"/>
      </div>
  
        <Button className="w-full bg-blue-800" type="submit">Submit</Button>
      </form>
    </Form>
     </div>
    </SheetContent>
  </Sheet>

        
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
