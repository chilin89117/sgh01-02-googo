import Image from 'next/image'
import Link from 'next/link'
import {RiSettings3Line} from 'react-icons/ri'
import {TbGridDots} from 'react-icons/tb'
import SearchBox from '@/components/SearchBox'
import SearchHeaderOptions from '@/components/SearchHeaderOptions'

const SearchHeader = () => {
  return (
    <header className='sticky top-0 bg-white'>
      <div className='p-4 flex gap-4 w-full justify-between items-center'>
        <Link href={'/'}>
          <Image src='/Googo.png' width={120} height={40} alt='Googo logo' />
        </Link>

        <div className='flex-1'>
          <SearchBox />
        </div>

        <div className='flex items-center'>
          <RiSettings3Line className='header-icon' />
          <TbGridDots className='header-icon' />
          <button className='py-2 px-4 sm:px-6 text-sm md:text-base bg-blue-500 text-white rounded-md
                            hover:brightness-105 hover:shadow-md transition-all'
          >Sign in</button>
        </div>
      </div>

      <SearchHeaderOptions />
    </header>
  )
}

export default SearchHeader