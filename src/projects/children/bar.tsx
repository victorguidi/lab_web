import SearchBar from "./Search"

const Bar: React.FC = () => {
  return (
    <div className="flex w-full h-[10%] items-top justify-between p-2 text-white font-bold">
      <SearchBar />
      <div className="flex w-[30%] justify-around items-top">
        <button>AI Projects</button>
        <button>Games</button>
        <button>APIs</button>
        <button>Libraries</button>
      </div>
      <div className="flex w-[10%] justify-between pl-4">
        <h1>Newest</h1>
        <h1>Filter</h1>
      </div>
    </div>
  )
}
export default Bar
