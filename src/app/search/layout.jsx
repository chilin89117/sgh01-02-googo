import SearchHeader from '@/components/SearchHeader'

export const metadata = {
  title: 'sgh01-02-googo Search',
  description: 'sgh01-02-googo search'
}

const SearchLayout = ({children}) => (
  <>
    <SearchHeader />
    {children}
  </>
)

export default SearchLayout
