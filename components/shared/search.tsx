"use client"
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Search = () => {

  const [query, setquery] = useState('');
  const searchParams = useSearchParams();

  const router = useRouter();

  

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = '';
      if(query){
         newUrl = formUrlQuery({
          params: searchParams.toString(),
          key:'query',
          value:query
        })
      } else{
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove:['query'],
  
        })
      }
      router.push(newUrl , {scroll:false})
    }, 300);

    return ()=> clearTimeout(delayDebounceFn);
  } , [query , searchParams , router])
  return (
    <div className="search">
    <div className="left">
    <Image src="/icon.svg" className='ml-4' height={45} width={45} alt='searchicon'></Image>
     <input onChange={(e)=>{
      setquery(e.target.value)
     }} placeholder='Search Events here'/>
    </div>
    <div className="right">
     <h3 className='submit'>Search</h3>
    </div>
   
 </div>
  )
}

export default Search
