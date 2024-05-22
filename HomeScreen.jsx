import { lastFilms } from '../data/films';
import LastFilmsList from '../components/LastFilmsList';

export default function HomeScreen() {
  return (
    <main>
      <h1>Luna</h1>
      <p>Informações sobre o Luna</p>
      <LastFilmsList films={lastFilms}/>
    </main>
  );
}
