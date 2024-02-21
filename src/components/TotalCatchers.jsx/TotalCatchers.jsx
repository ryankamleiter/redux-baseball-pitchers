import React from 'react';
import { useSelector } from 'react-redux';

const TotalCatchers = () => {
  const catcherList = useSelector(state => state.catcherList);

  return <div>Total Catchers: {catcherList.length}</div>;
};

export default TotalCatchers;