import Image from 'next/image'
import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'

const HomePage = () => {
  return (
    <>
      <HomeHeader />

      {/* height of div is 100vh - height of <HomeHeader> */}
      <div className='h-[calc(100vh-76px)] flex flex-col gap-6 pt-40 items-center'>
        <Image src='/Googo.png' width={300} height={106} alt='Googo logo' />
        <HomeSearch className='text-lg' />
      </div>
    </>
  )
}

export default HomePage
