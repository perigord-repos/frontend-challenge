import React from 'react';
import StatsLeft from './StatsLeft';
import StatsRight from './StatsRight';

function Stats() {
  return (
    <div className="row stats-and-right-container">
      <div className='col-md-6 stats-container'>
        <StatsLeft />
      </div>
      <div className="col-md-6 right-content">
        <StatsRight />
      </div>
    </div>
  );
}

export default Stats;
