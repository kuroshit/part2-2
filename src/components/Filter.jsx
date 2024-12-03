const Filter = ({ searchPerson, handleFilterChange }) => {
  return (
    <form onSubmit={searchPerson}>
      <div>
        filter: <input onChange={handleFilterChange} />
        <button type="submit">search</button>
      </div>
    </form>
  );
};

export default Filter;
