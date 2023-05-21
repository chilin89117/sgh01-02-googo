const WebLoading = () => {
  const arr = [...Array(3).keys()] // [0,1,2,3]

  return (
    <>
      {arr.map(() => (
        <div className='max-w-6xl mx-2 pt-10 lg:pl-52 animate-pulse'>
          <div className='w-48 h-2.5 mb-2.5 bg-gray-200 rounded-full'></div>
          <div className='w-[360px] h-3.5 mb-2.5 bg-gray-200 rounded-full'></div>
          <div className='w-[560px] h-2 mb-2.5 bg-gray-200 rounded-full'></div>
          <div className='w-[530px] h-2 mb-2.5 bg-gray-200 rounded-full'></div>
        </div>
      ))}
    </>
  )
}

export default WebLoading
