import styles from './SearchColorName.module.css';

export default function SearchColorName({ search, setSearch }) {
  const handleChange = ({ target }) => {
    setSearch(target.value);
  }

  return (
    <div className={styles.div}>
      <input 
        type="text"
        placeholder="Add color name"
        onChange={handleChange}
        value={search} 
        autoFocus
      />
    </div>
  )
}