
import Collection from '@/components/shared/Collection'
import { getAllevents } from '@/lib/actions/event.action'

export default async function Home() {

  const events = await getAllevents({
    query:'',
    category:'',
    page:1,
    limit:5
  });


  console.log(events);
  
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400">
      <h1>this is home page</h1>
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
