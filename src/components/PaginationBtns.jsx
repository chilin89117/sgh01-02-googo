'use client'
import Link from 'next/link'
import {usePathname, useSearchParams} from 'next/navigation'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'

const PaginationBtns = () => {
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const term = searchParams.get('term')
  const startIndex = +searchParams.get('start') || 1

  return (
    <div className='w-full sm:w-1/3 lg:w-1/4 sm:pb-4 flex justify-around text-blue-700'>
      {startIndex > 10 && (
        <Link href={`${pathName}?term=${term}&start=${startIndex-10}`}>
          <div className='flex flex-col items-center cursor-pointer hover:underline'>
            <BsChevronLeft className='h-5' />
            <p>Prev</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link href={`${pathName}?term=${term}&start=${startIndex+10}`}>
          <div className='flex flex-col items-center cursor-pointer hover:underline'>
            <BsChevronRight className='h-5' />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  )
}

export default PaginationBtns