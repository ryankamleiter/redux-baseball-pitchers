import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TotalPitchers from './TotalPitchers.jsx/TotalPitchers';
import TotalCatchers from '../TotalCatchers.jsx/TotalCatchers';

function App() {
  const dispatch = useDispatch();

  const [currentPitcher, setCurrentPitcher] = useState('Maud Nelson');
  const [currentCatcher, setCurrentCatcher] = useState('Elston Howard');
  const [newPitcher, setNewPitcher] = useState('');
  const [newCatcher, setNewCatcher] = useState('');

  const pitcherList = useSelector(state => state.pitcherList);
  const catcherList = useSelector(state => state.catcherList);

  const handlePitcherSubmit = event => {
    event.preventDefault();
    dispatch({ type: 'ADD_PITCHER', payload: newPitcher });
    setNewPitcher('');
  };

  const handleCatcherSubmit = event => {
    event.preventDefault();
    dispatch({ type: 'ADD_CATCHER', payload: newCatcher });
    setNewCatcher('');
  };

  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <h2>On the Mound: {currentPitcher}</h2>
      <h2>Behind the Plate: {currentCatcher}</h2>
      <TotalPitchers />
      <TotalCatchers />
      <h3>All Pitchers</h3>
      <form onSubmit={handlePitcherSubmit}>
        <input
          type="text"
          value={newPitcher}
          onChange={e => setNewPitcher(e.target.value)}
          placeholder="New Pitcher Name"
        />
        <button type="submit">Add Pitcher</button>
      </form>
      <ul>
        {pitcherList.map(pitcher => (
          <li key={pitcher} onClick={() => setCurrentPitcher(pitcher)}>
            {pitcher}
          </li>
        ))}
      </ul>
      <h3>All Catchers</h3>
      <form onSubmit={handleCatcherSubmit}>
        <input
          type="text"
          value={newCatcher}
          onChange={e => setNewCatcher(e.target.value)}
          placeholder="New Catcher Name"
        />
        <button type="submit">Add Catcher</button>
      </form>
      <ul>
        {catcherList.map(catcher => (
          <li key={catcher} onClick={() => setCurrentCatcher(catcher)}>
            {catcher}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
