import { auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const {userId} = await auth();
  const route = userId ? '/journal' : '/new-user';
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center text-white'>
      <div className='w-full max-w-[600px] mx-auto'>
        <h1 className='text-6xl mb-4'>Write your Journal and Track your mood</h1>
        <p className='text-2xl text-white/60 mb-4'>This is the best app to track your mood through out the week </p>
        <div>
          <Link href={route}>
            <button className='bg-blue-600 px-4 py-2 rounded-lg text-xl'>get started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
