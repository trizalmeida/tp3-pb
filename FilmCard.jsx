export default function FilmCard(props) {
  const film = props.film;
  const action = props.action;
  return (
    <span style={styles.container}>
      <img src={film.Poster} 
        style={{
         width: 200,
         height: 350,
        }} alt={`${film.Title} Poster`}/>
      <h3>{film.Title}</h3>
      <p>{film.Genre}</p>
      <p>Dirigido por {film.Director}</p>
      <p>Ano de Lançamento: {film.Year}</p>
      { action && <button onClick={() => {action(film.Title)}}>Comentar</button> }
      <button>Like</button>
    </span>
  ); 
};

const styles = {
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: "steelblue",
    borderRadius: 20,
  }
}
