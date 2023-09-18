import React, { useState } from 'react';
import './index.css';
import { FiSearch } from 'react-icons/fi';
import {FiTrendingUp} from 'react-icons/fi';

function SearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const [showRecommended, setShowRecommended] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setShowRecommended(value.length > 0);
  };

  const handleMouseEnter = () => {
    setShowRecommended(true);
  };

  const handleMouseLeave = () => {
    setShowRecommended(false);
  };

  const handleItemClick = (item) => {
    setSearchValue(item);
    setShowRecommended(false);
  };

  return (
    <div className="search-container" onMouseLeave={handleMouseLeave}>
      <div className="search-input-container" onMouseEnter={handleMouseEnter}>
        <input
          type="text"
          className="search-input"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search"
        />
        <div className="search-icon">
          <FiSearch />
        </div>
      </div>
      {showRecommended && (
        <ul className="recommended-list">
          <li onClick={() => handleItemClick('Polygon creates history')}>
            <div className='uio'>
              <div>Polygon creates history</div>
              <div className='op'><FiTrendingUp/></div>
            </div>
            </li>
            <li onClick={() => handleItemClick('Elon Musk changes ')}>
            <div className='uio'>
              <div>Elon Musk changes..</div>
              <div className='op'><FiTrendingUp/></div>
            </div>
            </li>
            <li onClick={() => handleItemClick('SEC allows Bitcoin')}>
            <div className='uio'>
              <div>SEC allows Bitcoin</div>
              <div className='op'><FiTrendingUp/></div>
            </div>
            </li>
            <li onClick={() => handleItemClick('Dogecoin crashes badly')}>
            <div className='uio'>
              <div>Dogecoin crashes badly..</div>
              <div className='op'><FiTrendingUp/></div>
            </div>
            </li>
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
