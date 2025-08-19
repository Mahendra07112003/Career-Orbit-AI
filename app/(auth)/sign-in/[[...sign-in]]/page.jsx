import { SignIn } from '@clerk/nextjs'


const page = () => {
  return (
    <div className='flex justify-center pt-20 pb-10'>
    <SignIn afterSignInUrl="/onboarding" signUpUrl="/sign-up" />
    </div>
  
  )
}

export default page