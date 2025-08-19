import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { ChevronDown, ChevronsDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { checkUser } from '@/lib/checkUser'

const Header = async () => {
  await checkUser();
  return (


    <header className='fixed top-0 w-full  border-b bg-background/80 backdrop-blur-md z-50 
      supports-[backdrop-filter]:bg-background/60'
      suppressHydrationWarning>

      <nav className='container mx-auto  px-2 h-16 flex items-center '>
        <Link href="/" >
          <Image src="/mg.png" alt="Our logo" width={679} height={238} className='h-16  w-auto object-contain bg-transparent' />
        </Link>

        <div className='container flex items-end justify-end px-2 space-x-2 py-0   md:space-x-4'>
        
          <SignedIn  >
            <Link href={'/dashboard'}>
              <Button variant="outline">
                <LayoutDashboard className='h-4 w-4' />
                <span className='hidden md:block'> Industry Insights</span>
              </Button>
            </Link>


            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <StarIcon className='h-4 w-4' />
                  <span className='hidden md:block'> Growth Tools</span>
                  <ChevronsDown className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>

                <DropdownMenuItem>
                  <Link href={"/resume"} className='flex items-center gap-2'>
                    <FileText className='h-4 w-4' />
                    <span > Build Resume</span>

                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/ai-cover-letter"} className='flex items-center gap-2'>
                    <PenBox className='h-4 w-4' />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/interview"} className='flex items-center gap-2'>
                    <GraduationCap className='h-4 w-4' />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>
         

          <SignedOut>
            <Link href="/sign-in">
              <Button variant="outline">Sign In</Button>
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold"

                },
              }}

              afterSignOutUrl='/'
            />
          </SignedIn>
         
        </div>
      </nav>



    </header>
  )
}

export default Header