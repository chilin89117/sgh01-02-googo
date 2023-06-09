'use client'
import {useState} from 'react'
import {useRouter, useSearchParams} from 'next/navigation'
import {RxCross2} from 'react-icons/rx'
import {BsFillMicFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'

const SearchBox = () => {
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('term')
  const [term, setTerm] = useState(searchTerm || '')
  const router = useRouter()
  
  const handleSubmit = e => {
    e.preventDefault()
    if(!term.trim()) return
    router.push(`search/web?term=${term}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='px-6 py-1 max-w-3xl flex gap-2 justify-between items-center border border-gray-200 rounded-full shadow-lg'
    >
      <input type='text' className='w-full focus:outline-none' value={term} onChange={e => setTerm(e.target.value)} />
      <RxCross2 className='sm:mr-2 text-2xl text-gray-500 cursor-pointer' onClick={() => setTerm('')} />
      <BsFillMicFill className='hidden sm:inline-block pl-3 text-4xl text-blue-500 border-l-2 border-gray-300' />
      <AiOutlineSearch className='hidden sm:inline-block text-2xl text-blue-500 cursor-pointer' onClick={handleSubmit} />
    </form>
  )
}

export default SearchBox
