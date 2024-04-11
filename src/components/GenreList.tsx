import useGenres from '../hooks/useGenres'

const GenreList = () => {
  const { data } = useGenres(); // Destructure the genres from the return value of useGenres hook

  return (
    <ul>
      {data.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList;