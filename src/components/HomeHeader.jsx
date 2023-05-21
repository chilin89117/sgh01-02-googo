import Link from 'next/link'
import {TbGridDots} from 'react-icons/tb'

// header for home page with links to gmail, images, grid dots and sign in
const HomeHeader = () => {
  return (
    <header className='flex justify-end p-5 text-sm'>
      <div className='flex items-center gap-6'>
        <Link href='https://mail.google.com' className='hover:underline'>Gmail</Link>
        <Link href='https://image.google.com' className='hover:underline'>Images</Link>
        <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2' />
        <button className='px-6 py-2 bg-blue-500 text-white font-medium rounded-md
                           hover:brightness-105 hover:shadow-md transition-shadow'
        >Sign in</button>
      </div>
    </header>
  )
}

export default HomeHeader
