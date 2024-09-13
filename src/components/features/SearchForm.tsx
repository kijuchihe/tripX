import React, { useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const SearchForm = ({
  category = 'hotels',
}: {
  category?:
    | ''
    | 'flights'
    | 'hotels'
    | 'rentals'
    | 'restaurants'
    | 'cars'
    | 'activities'
}) => {
  const [query, setQuery] = useState<string>('')
  const navigate = useNavigate()

  const placeholderText = useMemo(
    () => `Search ${category.toLowerCase()}`,
    [category]
  )
  const searchPath = useMemo(
    () => `/search/${category.split('/')[0].toLowerCase()}?q=${query}`,
    [category]
  )
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(searchPath)
    setQuery('')
  }
  return (
    <div className="relative mx-auto w-fit">
      <form
        action=""
        className="flex items-center w-[300px] md:w-[350px] gap-4 bg-gray-200 py-3 px-4 rounded-full border-2 border-transparent focus-within:border-blue-500 focus-within:border-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder={placeholderText}
          className="flex-1 bg-transparent border-none outline-none placeholder:text-gray-700"
          value={query}
          onChange={handleChange}
        />
        <button aria-label="search" type="submit">
          <FiSearch />
        </button>
      </form>
    </div>
  )
}

export default SearchForm
