import React from 'react'
import useGenres from '../hooks/useGenres'

const GenreList = () => {
  const { genres } = useGenres(); // Destructure the genres from the return value of useGenres hook

  return (
    <ul>
      {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList