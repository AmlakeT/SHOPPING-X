import React from 'react'

function SearchInputs() {
  return (
    <div>
          <form className="flex items-center md:justify-center px-3 space-x-3 md:space-x-10 mr-auto my-5">
          <label htmlFor="search">Search Products:</label>
          <input
            id="search"
            className="border w-52 md:w-fit border-indigo-500 px-10 outline-indigo-500 text-indigo-500 py-2 rounded"
            type="text"
            placeholder="Search Items..."
          />
        </form>
    </div>
  )
}

export default SearchInputs