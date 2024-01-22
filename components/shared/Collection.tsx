import { IEvent } from '@/lib/database/models/event.model'
import React from 'react'
import Card from './Card'

import Category from './category'
  



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
        return (
        <div className='h-16  bg-gray-200 mt-9 rounded-md flex justify-center items-center flex-col p-14'>
            <h1 className='text-orange-400 font-bold' >No data available</h1>
            <p>Please Try Again after Some time</p>
        </div>
        )
    }
    else{
        return (
            <>
           <Category/>
            <div className='w-full bg-gray-100 flex  gap-4 flex-wrap justify-center pt-11 pb-11'>
                {
                    data.map((curr , index)=>{
                        const hasOrderLink = collectionTypes == 'EVENT_ORGANIZED';
                        const allEvents = collectionTypes == 'ALL_EVENTS' 
                        const OrganizedEvent = collectionTypes == 'EVENT_ORGANIZED'
                        return <Card key={index} curr={curr} hasOrderLink={hasOrderLink} allEvents={allEvents} OrganizedEvent={OrganizedEvent} />
                    })
                }
            </div>
            </>
        )
    }
  
}

export default Collection
