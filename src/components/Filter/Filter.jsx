import React from 'react';
import PropTypes from 'prop-types';

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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
