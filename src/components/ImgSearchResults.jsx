import Link from 'next/link'
import PaginationBtns from '@/components/PaginationBtns'

const ImgSearchResults = ({data}) => {
  return (
    <div className='mt-4 pb-36 sm:pb-24'> {/* pb for pagination/footer */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-3'>
        {data.items?.map(i => (
          <div key={i.link} className='mb-8'>
            <div className='group'>
              <Link href={i.image.contextLink}>
                <img src={i.link} alt={i.title} className='w-full h-60 group-hover:shadow-xl object-contain transition-shadow bg-slate-100' />
              </Link>
              <Link href={i.image.contextLink}>
                <h2 className='group-hover:underline text-xl truncate'>{i.title}</h2>
              </Link>
              <Link href={i.image.contextLink}>
                <p className='group-hover:underline text-gray-600'>{i.displayLink}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className=''>
        <PaginationBtns />
      </div>
    </div>
  )
}

export default ImgSearchResults
