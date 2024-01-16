import React from 'react'
import { Button } from '../ui/button'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='h-20 w-full bg-slate-50 flex items-center justify-around'>
        <h1>EventSync</h1>


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
  )
}

export default Header
