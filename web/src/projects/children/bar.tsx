import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import SearchBar from './Search';

type BarProps = {
  FilterByTag: (tag: string) => void;
  findNewestProject: () => void;
  searchByTitleOrDescription: (query: string) => void;
};

const Bar: React.FC<BarProps> = ({ FilterByTag, findNewestProject, searchByTitleOrDescription }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFilterClick = (tag: string) => {
    FilterByTag(tag);
  };

  const handleNewestClick = () => {
    findNewestProject();
  };

  const handleSearch = (query: string) => {
    searchByTitleOrDescription(query);
  };

  const handleReset = () => {
    searchByTitleOrDescription("")
  }

  return (
    <div className="flex w-full h-[10%] items-top justify-between p-2 text-light-text dark:text-dark-text font-bold">
      <SearchBar onSearch={handleSearch} />
      <div className="hidden md:flex w-[30%] justify-around items-top">
        <button onClick={() => handleFilterClick('AI')}>AI Projects</button>
        <button onClick={() => handleFilterClick('Games')}>Games</button>
        <button onClick={() => handleFilterClick('APIs')}>APIs</button>
        <button onClick={() => handleFilterClick('Libraries')}>Libraries</button>
      </div>
      <div className="hidden md:flex w-auto max-w-[18%] justify-between pl-4 gap-4">
        <button onClick={handleNewestClick}>Newest</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="flex md:hidden items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-[21%] right-6 w-1/2 rounded bg-black p-4 flex flex-col items-center text-white">
          <button className="mb-2 hover:to-zinc-900" onClick={() => handleFilterClick('AI')}>AI Projects</button>
          <button className="mb-2" onClick={() => handleFilterClick('Games')}>Games</button>
          <button className="mb-2" onClick={() => handleFilterClick('APIs')}>APIs</button>
          <button className="mb-2" onClick={() => handleFilterClick('Libraries')}>Libraries</button>
          <button className="mt-2" onClick={handleNewestClick}>Newest</button>
          <button className="mt-2" onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default Bar;
