"use server"
import { AlertDialogAction } from '../ui/alert-dialog'

const Orderactioncomponent = ({order} : any) => {

    console.log("getting value " , order);

    const handleSubmit = () => {
        alert("working")
    }
    

  return (
    <AlertDialogAction  className='bg-orange-700'>Register</AlertDialogAction>
  )
}

export default Orderactioncomponent
