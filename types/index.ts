





export type createEventParams = {
    userId?: string,
    event:{
        title: string,
        eventType: string,
        price?:string,
        category?:string,
        location:string,
        startDate:Date,
        endDate:Date,
        detail:string,
        imageUrl:string,
        url:string,
    },
    path:string,
}


export type SearchParamProps = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }


  export type GetAllEventsParams = {
    query: string
    category:string
    limit?:number 
    page: number | string
  }

  export type GeteventcreatedByuserParams = {
      userId: string
      limit?: number
      page: number
  }


  export type UrlQueryParams = {
    params: string
    key: string
    value: string | null
  }
  
  export type RemoveUrlQueryParams = {
    params: string
    keysToRemove: string[]
  }



  export type OrderParams = {
    buyer:string
    event: any
    createdAt?: Date
  }