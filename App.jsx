import HomeScreen from './screens/HomeScreen';
import FilmsListScreen from './screens/FilmsListScreen';
import SeriesListScreen from './screens/SeriesListScreen';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState(0);
  const addFilm = [];

  function addSavedFilm(film) {
    addFilm.add(film);
  }
  
  function getScreen() {
    switch (screen) {
      case 0: 
        return <HomeScreen />;
      case 1: 
        return <FilmsListScreen />;
      case 2:
        return <SeriesListScreen />;
      default:
        return <HomeScreen />;
    }
  };
  
  return (
    <>
      <nav className='nav-container'>
        <a className='nav-item' onClick={() => setScreen(0)}>Home</a>
        <a className='nav-item' onClick={() => setScreen(1)}>Filmes</a>
        <a className='nav-item' onClick={() => setScreen(2)}>Séries</a>
        <a className='nav-item nav-item-user'>Usuário</a>
      </nav>
      {getScreen()}
    </>
  )
};
