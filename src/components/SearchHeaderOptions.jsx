'use client'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {AiOutlineCamera, AiOutlineSearch} from 'react-icons/ai'

const SearchHeaderOptions = () => {
  const pathName = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const term = searchParams.get('term')

  const selectTab = tab => {
    router.push(`/search/${tab === 'Images' ? 'image' : 'web'}?term=${term}`)
  }

  return (
    <div className='w-full flex justify-center text-gray-700 text-sm gap-2 border-b'>
      <div
        className={`pb-1 px-2 flex items-center gap-1 border-b-4 active:text-blue-500 cursor-pointer
                   ${pathName === '/search/web' && 'text-blue-600 border-blue-600'}`}
        onClick={() => selectTab('All')}
      >
        <AiOutlineSearch className='text-md' />
        <p>All</p>
      </div>

      <div
        className={`pb-1 px-2 flex items-center gap-1 border-b-4 active:text-blue-500 cursor-pointer
                   ${pathName === '/search/image' && 'text-blue-600 border-blue-600'}`}
        onClick={() => selectTab('Images')}
      >
        <AiOutlineCamera className='text-md' />
        <p>Images</p>
      </div>
    </div>
  )
}

export default SearchHeaderOptions