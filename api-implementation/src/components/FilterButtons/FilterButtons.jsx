import { useContext } from 'react';
import FilterContext from '../../context/FilterContext';

const FilterButtons = () => {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <div className='filter-buttons'>
      <button 
        onClick={() => setFilter('all')}
        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
      >
        All
      </button>
      
      <button 
        onClick={() => setFilter('active')}
        className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
      >
        Active
      </button>
      
      <button 
        onClick={() => setFilter('completed')}
        className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;