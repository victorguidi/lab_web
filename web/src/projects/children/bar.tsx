import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Importing a burger icon from react-icons
import SearchBar from './Search';

const Bar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex w-full h-[10%] items-top justify-between p-2 text-white font-bold">
      <SearchBar />
      <div className="hidden md:flex w-[30%] justify-around items-top">
        <button>AI Projects</button>
        <button>Games</button>
        <button>APIs</button>
        <button>Libraries</button>
      </div>
      <div className="hidden md:flex w-auto max-w-[18%] justify-between pl-4 gap-4">
        <button>Newest</button>
        <button>Filter</button>
      </div>
      <div className="flex md:hidden items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-[10%] right-0 w-full bg-[#231B43] p-4 flex flex-col items-center text-white">
          <button className="mb-2">AI Projects</button>
          <button className="mb-2">Games</button>
          <button className="mb-2">APIs</button>
          <button className="mb-2">Libraries</button>
          <h1 className="mt-4">Newest</h1>
          <h1>Filter</h1>
        </div>
      )}
    </div>
  );
};

export default Bar;
