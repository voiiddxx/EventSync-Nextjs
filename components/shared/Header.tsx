import React from 'react'
import { Button } from '../ui/button'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {

  return (
    <div className="nav-hero">
      <div className='h-20 w-full bg-transparent flex items-center justify-around'>
        <h1 className='font-bold text-black '>EventSync</h1>
        <SignedIn>
          <div className='flex gap-5 font-medium text-gray-800'>
            <p>Home</p>
            <Link href={`/profile`}><p>profile</p></Link>
            <Link href={`/profile`}><p>Orders</p></Link>
            <Link href={`/events/create`}><p>Create Event</p></Link>
          </div>
        </SignedIn>
        <SignedIn>
            <UserButton afterSignOutUrl='/'></UserButton>
        </SignedIn>
        <SignedOut>
        <Button asChild>
            <Link href="/sign-in">
                Login
            </Link>
        </Button>
        </SignedOut>
    </div>
    </div>
  )
}

export default Header
