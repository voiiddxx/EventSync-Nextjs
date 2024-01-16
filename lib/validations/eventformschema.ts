import * as z from "zod"

const formSchema = z.object({
  title: z.string().min(2).max(50),
  detail: z.string().min(15).max(250),
  location: z.string().min(5).max(50),
//   // imageUrl: z.string().min(5).max(50),
  startDate: z.date(),
  endDate: z.date(),
  category: z.enum(["cultural" , "academic" , "sports" , "technical" , "Creative" , "personolity developement"]),
  url: z.string().url(),
  eventType: z.enum(["free" , "paid"]),
  price: z.string().optional(),

}).refine((data)=>{

  if(data.eventType=="paid"){
    return !!data.price;
  }
  return true;

}  , {
  message:'Please provide event registration ammount',
  path:["price"]
})

export default formSchema
