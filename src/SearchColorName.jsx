export default function SearchColorName({ search, setSearch }) {
  return (
    <div>
      <input 
        type="text"
        placeholder="Add color name"
        onChange={(e) => setSearch(e.target.value)}
        value={search} 
      />
    </div>
  )
}