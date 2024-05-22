import { useState, useEffect } from 'react';
import FilmCard from '../components/FilmCard';

export default function FilmsListScreen(props) {
  const action = props.action;

  const [films, setFilms] = useState([]);
  const [message, setMessage] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const baseUrl = 'https://pb-beatriz-almeida-default-rtdb.firebaseio.com/';

  function convertedData(data) {
    const ids = Object.keys(data);
    let films = Object.values(data);
    return films.map((film, index) => {
      return {
        id: ids[index],
        ...film,
      };
    });
  }

  useEffect(() => {
    fetch(`${baseUrl}/films.json`)
      .then(async (resp) => {
          const respFilms = await resp.json();
          let convertedFilms = convertedData(respFilms);
          setFilms(convertedFilms);
      })
      .catch(error => setMessage(error.message))
      .finally(() => setLoading(false));
  }, []);

  function selectFilm(title) {
    alert(`Você selecionou o filme ${title}.`);
  }

  const movies = films.filter(film => film.Type === "movie");

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {isLoading && <p>Carregando...</p>}
      {message && <p>Erro: {message}</p>}
      {films && 
        movies.map((film) => (
        <FilmCard key={film.id} film={film} action={() => selectFilm(film.Title)} />
      ))}
    </div>
  );
}
