"use server"
import { AlertDialogAction } from '../ui/alert-dialog'

const Orderactioncomponent = ({order} : any) => {

    console.log("getting value " , order);

    const handleSubmit = () => {
        alert("working")
    }
    

  return (
    <AlertDialogAction type='submit' className='bg-orange-700'>Register</AlertDialogAction>
  )
}

export default Orderactioncomponent
