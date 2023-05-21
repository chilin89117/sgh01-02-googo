import Link from 'next/link'
import Parser from 'html-react-parser'
import PaginationBtns from '@/components/PaginationBtns'

const WebSearchResults = ({data}) => {
  const searchInfo = data.searchInformation

  return (
    <div className='w-full px-3 pb-36 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52'> {/* pb for pagination/footer */}
      <p className='mt-3 mb-5 text-sm text-gray-600'>
        {`About ${searchInfo?.formattedTotalResults} results (${searchInfo?.formattedSearchTime} seconds)`}
      </p>
      
      {data.items?.map(i => (
        <div key={i.link} className='max-w-xl mb-8'>
          <div className='flex flex-col group'>
            <Link
              href={i.link}
              className='text-sm truncate'
            >{i.formattedUrl}</Link>
            <Link
              href={i.link}
              className='group-hover:underline decoration-blue-800 text-lg font-semibold text-blue-800 truncate'
            >{i.title}</Link>
          </div>
          <p className='text-gray-600'>{Parser(i.htmlSnippet)}</p>
        </div>
      ))}

      <PaginationBtns />
    </div>
  )
}

export default WebSearchResults