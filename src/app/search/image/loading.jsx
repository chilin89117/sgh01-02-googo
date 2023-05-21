const ImgLoading = () => {
  const arr = [...Array(3).keys()] // [0,1,2,3]

  return (
    <div className='flex flex-col sm:flex-row lg:pl-52'>
      {arr.map(() => (
        <div className='my-2 mx-2 max-w-6xl animate-pulse'>
          <div className='w-full sm:w-96 h-48 mb-4 bg-gray-200 rounded-md'></div>
          <div className='w-full sm:w-96 h-2 mb-2.5 bg-gray-200 rounded-md'></div>
          <div className='w-full sm:w-96 h-2 mb-2.5 bg-gray-200 rounded-md'></div>
        </div>
      ))}
    </div>
  )
}

export default ImgLoading
