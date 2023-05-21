import Link from 'next/link'
import WebSearchResults from '@/components/WebSearchResults'

const SearchWebPage = async ({searchParams}) => {
  const startIndex = searchParams.start || '1'

  // see README.md for Google API and context keys websites
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.G_API_KEY}&cx=${process.env.G_CX_KEY}&q=${searchParams.term}&start=${startIndex}`
  )
  if(!response.ok) throw new Error('Failed to fetch data from G...') // handled by ../error.jsx
  const data = await response.json()
  const items = data.items

  return (
    <>
      {items && <WebSearchResults data={data} />}

      {/* when search returned no items (styling is the same as app/search/error.jsx) */}
      {!items && (
        <div className='mt-10 flex flex-col justify-center items-center'>
          <h1 className='mb-4 text-3xl'>No results found.</h1>
          <p>Try another search term or go back to <Link className='text-blue-500' href='/'>home</Link> page.</p>
        </div>
      )}
    </>
  )
}

export default SearchWebPage
