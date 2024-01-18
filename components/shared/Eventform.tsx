"use client"


import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import formSchema from "@/lib/validations/eventformschema"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from "../ui/textarea"
import DatePicker from "react-datepicker";
import { useState } from "react"
import "react-datepicker/dist/react-datepicker.css";
import { createEvent } from "@/lib/actions/event.action"
import axios from 'axios';
import { useRouter } from "next/navigation"

    type eventFormprops = {
        userId: string | undefined
    }

const Eventform = ({userId}:eventFormprops) => {


    const router = useRouter();

    
  const [ImageToSubmit, setImageToSubmit] = useState<any>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price:"",
      location:"",
      category:'Creative',
      startDate: new Date(),
      endDate: new Date(),
      detail:'',
      url:''
      

    },
  });


      const eventType = form.watch("eventType");

     async function onSubmit(values: z.infer<typeof formSchema>) {
        if(ImageToSubmit!=null){

          let formdata = new FormData();
          formdata.append("file" , ImageToSubmit[0]);
          formdata.append("upload_preset" , "pdrcp1le");
          const response = await axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload" , formdata ,);
          const imagedata = await response.data;
          console.log("this is imager url",imagedata.url);
            const newEvent = await createEvent({event:{...values , imageUrl:imagedata.url} , userId , path:'/profile'})

            if(newEvent){
              form.reset();
              router.push(`/events/${newEvent._id}`)
            }


            
        }
           
      }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="flex justify-center items-center gap-6 mt-6">
        
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem className="w-80">
            <FormControl>
              <Input placeholder="Event Title" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
        control={form.control} 
        name="eventType"
        render={({ field }) => (
          <FormItem className="w-80">
            <FormControl>
            <Select onValueChange={field.onChange} >
                  <SelectTrigger  className="w-72">
                    <SelectValue placeholder="Select Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>  
                  </SelectContent>
                </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      </div>

      
      {
        eventType == "paid" && (
          <FormField
        control={form.control}
        name="price"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <Input placeholder="Event Registration Price" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        )
      }
      

      <div className="flex items-center justify-center gap-6
      " >
      <FormField
        control={form.control} 
        name="category"
        render={({ field }) => (
          <FormItem className="w-80">
            <FormControl>
            <Select onValueChange={field.onChange} >
                  <SelectTrigger  className="w-72">
                    <SelectValue placeholder="Select Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>  
                    <SelectItem value="academic">Academic</SelectItem>  
                    <SelectItem value="sports">Sports</SelectItem>  
                    <SelectItem value="creative">Creativity</SelectItem>  
                    <SelectItem value="personolity developement">Personolity Developement</SelectItem>  
                  </SelectContent>
                </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem className="w-80">
            <FormControl>
              <Input placeholder="Event Location" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
      <div className="flex justify-center items-center gap-6">
      <FormField
        control={form.control}
        name="startDate"
        render={({ field }) => (
          <FormItem className="w-80">
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
          <FormItem className="w-80 ">
            <FormControl>
            <div className=" h-10  bg-white rounded-md flex justify-start items-center gap-6 px-2" >
           <p>Select End Date</p>
           <DatePicker className="w-32"
           showTimeSelect
           timeInputLabel="Time"
           dateFormat="MM/dd/yyyy h:mm aa"
           wrapperClassName="DatePicker"
            selected={field.value} 
           onChange={(date: Date) => field.onChange(date)
            
           } />
            </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
      <div className="flex items-center justify-center gap-6">
    <FormField
        control={form.control}
        name="detail"
        render={({ field }) => (
          <FormItem className="w-80">
            <FormControl>
              <Textarea className="h-44"  placeholder="Event Detail" {...field} />
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
    </div>
    <FormField
        control={form.control}
        name="url"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <Input placeholder="Event Online Link" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    
      
      <Button className="w-full" type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default Eventform
