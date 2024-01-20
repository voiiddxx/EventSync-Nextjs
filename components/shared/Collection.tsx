import { IEvent } from '@/lib/database/models/event.model'
import React from 'react'
import Card from './Card'




    type collectionProps = {
        data: IEvent[],
        emptyTitle: string,
        emptySubtitle: string,
        totoalPages: number | string
        limit : number,
        page: number | string,
        collectionTypes:'EVENT_ORGANIZED' | 'MY_TICKET' | 'ALL_EVENTS',
        urlParams: string

        
    }
const Collection = ({
    data,
    emptyTitle,
    emptySubtitle,
    totoalPages =0,
    limit,
    page,
    collectionTypes,
    urlParams
} : collectionProps) => {

    if(data.length<1){
        return (<div>
            <h1>No data available</h1>
        </div>)
    }
    else{
        return (
            <div className='w-full bg-gray-100 flex  gap-4 flex-wrap justify-center pt-11 pb-11'>
                {
                    data.map((curr , index)=>{
                        return <Card key={index} curr={curr}/>
                    })
                }
            </div>
        )
    }
  
}

export default Collection
