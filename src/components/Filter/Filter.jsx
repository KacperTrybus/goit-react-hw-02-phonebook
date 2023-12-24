import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <label className="filter">Find contacts by name:</label>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
