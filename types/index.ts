





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