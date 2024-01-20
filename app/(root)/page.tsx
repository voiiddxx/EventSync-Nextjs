
import Collection from '@/components/shared/Collection'
import { getAllevents } from '@/lib/actions/event.action'
import "./hero.css"
import Image from 'next/image';

export default async function Home() {

  const events = await getAllevents({
    query:'',
    category:'',
    page:1,
    limit:5
  });


  console.log(events);
  
  
  return (
    <main className="flex  flex-col items-center justify-between">
      <div className="hero">
        <h1>
        Explore Events  Around You And <br /> Get Connect With Real World
        </h1>
        <p>
        I’ve written on why traditional “semantic class names” are the reason CSS is <br /> hard to maintain, but the truth is you’re never going to believe 
        </p>

        <div className="search">
           <div className="left">
           <Image src="/icon.svg" className='ml-4' height={45} width={45} alt='searchicon'></Image>
            <input placeholder='Search Events here'/>
           </div>
           <div className="right">
            <h3 className='submit'>Search</h3>
           </div>
          
        </div>
      </div>
      <Collection 
      data={events?.data}
      emptyTitle="No events found"
      emptySubtitle="There is no Events for now , Please come back later"
      collectionTypes="ALL_EVENTS"
      limit={6}
      page={1}
      totoalPages={2}
      urlParams=''
      />
    </main>
  )
}
