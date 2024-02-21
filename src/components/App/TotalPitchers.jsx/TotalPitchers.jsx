import React from 'react';
import { useSelector } from 'react-redux';

const TotalPitchers = () => {
  const pitcherList = useSelector(state => state.pitcherList);

  return <div>Total Pitchers: {pitcherList.length}</div>;
};

export default TotalPitchers;
