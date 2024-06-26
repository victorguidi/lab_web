import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <form className="flex items-center min-w-[20%] md:w-auto" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="flex w-full justify-start items-center gap-2 bg-gray-300 dark:bg-[#0C0C0C] bg-opacity-90 rounded-ee-md p-2">
        <svg className="w-5 h-5 text-black dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
        <input
          type="text"
          id="simple-search"
          className="flex justify-start bg-gray-300 dark:bg-[#0C0C0C] w-full h-full"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
          style={{ outline: 'none' }}
          required
        />
      </div>
    </form>
  );
};

export default SearchBar;

// import React, { useState } from 'react';
//
// const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
//   const [query, setQuery] = useState('');
//
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newQuery = event.target.value;
//     setQuery(newQuery);
//     onSearch(newQuery);
//   };
//
//   return (
//     <form className="flex items-start min-w-[15%]" onSubmit={(e) => e.preventDefault()}>
//       <label htmlFor="simple-search" className="sr-only">Search</label>
//       <div className="relative w-full">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
//           </svg>
//         </div>
//         <input
//           type="text"
//           id="simple-search"
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholder="Search branch name..."
//           value={query}
//           onChange={handleInputChange}
//           required
//         />
//       </div>
//       <button
//         type="submit"
//         className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//       >
//         <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//         </svg>
//         <span className="sr-only">Search</span>
//       </button>
//     </form>
//   );
// };
//
// export default SearchBar;
