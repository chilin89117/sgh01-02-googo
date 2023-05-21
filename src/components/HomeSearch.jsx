'use client'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'

const HomeSearch = () => {
  const [input, setInput] = useState('')
  const [loadingLucky, setLoadingLucky] = useState(false)
  const router = useRouter()

  // when 'Googo Search' is clicked or user presses enter from <input>
  const handleSubmit = e => {
    e.preventDefault()
    if(!input.trim()) return
    router.push(`search/web?term=${input}`)
  }

  // when "I'm Feeling Luck" is clicked
  const handleLucky = async () => {
    setLoadingLucky(true)
    const response = await fetch('https://random-word-api.herokuapp.com/word')
    if(!response) return
    const word = await response.json()
    router.push(`search/web?term=${word}`)
    setLoadingLucky(false)
  }

  return (
    <>
      <form className='flex items-center gap-4 max-w-[90%] w-full mx-auto border border-gray-200 px-5 py-3 rounded-full
                      hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'
            onSubmit={handleSubmit}
      >
        <AiOutlineSearch className='text-xl text-gray-500 mr-3'/> {/* magnifying glass icon */}
        <input type='text' className='flex-1 focus:outline-none' value={input}
               onChange={e => setInput(e.target.value)}
        />
        <BsFillMicFill /> {/* microphone icon */}
      </form>

      <div className='flex flex-col items-center gap-2 sm:flex-row sm:gap-4'>
        <button className='btn' onClick={handleSubmit}>Googo Search</button> {/* .btn defined in globals.css */}
        <button className='btn' onClick={handleLucky} disabled={loadingLucky}>
          {/* spinner from loading.io */}
          {loadingLucky ? <img src='/spinner.svg' alt='Loading...' className='h-6' /> : "I'm Feeling Lucky"}
        </button>
      </div>
    </>    
  )
}

export default HomeSearch