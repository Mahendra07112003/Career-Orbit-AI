import { SignUp } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center pt-20 pb-10'>
      <SignUp afterSignUpUrl="/onboarding" signInUrl="/sign-in" />
        </div>
  )
}

export default page