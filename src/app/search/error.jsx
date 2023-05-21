'use client'
// import {useEffect} from 'react'

const SearchError = ({error, reset}) => {
  // useEffect(() => {
  //   console.log('==================', error)
  // }, [error])

  return (
    <div className='mt-10 flex flex-col justify-center items-center'>
      <h1 className='mb-4 text-3xl'>Something went wrong!</h1>
      <button className='text-blue-500' onClick={reset}>Try again</button>
    </div>
  )
}

export default SearchError
