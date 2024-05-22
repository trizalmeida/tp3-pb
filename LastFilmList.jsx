import FilmCard from './FilmCard';

export default function LastFilmsList(props) { 
  const films = props.films;
  return (
    <div>
      <h2> {films.length} Filmes que talvez você goste</h2>
      <div style={{ display: 'flex' }}>
        {films.map((film) => (
          <FilmCard film={film} /> 
        ))}
      </div>
    </div>
  );
}
