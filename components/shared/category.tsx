import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const Category = () => {
  return (
    <div className='bg-gray-100 w-full flex items-center justify-between'>
    <div className='ml-64 mt-9'>
    <h1 className='text-2xl  font-semibold text-gray-900'>Events That Matters</h1>
     <p className='mt-2 font-light text-gray-600 text-sm'>Get Access to all the events happeing in globe</p>
    </div>
    <div className='mr-60'>
    <Select>
         <SelectTrigger className="w-[300px]">
             <SelectValue placeholder="Select Category" />
         </SelectTrigger>
         <SelectContent>
             <SelectItem value="technical">Technical</SelectItem>
             <SelectItem value="cultural">Cultural</SelectItem>
             <SelectItem value="academic">Academic</SelectItem>
             <SelectItem value="pdp">persenolity development</SelectItem>
             <SelectItem value="ai">Artificial Intelligence</SelectItem>
         </SelectContent>
         </Select>

    </div>
 </div>
  )
}

export default Category
