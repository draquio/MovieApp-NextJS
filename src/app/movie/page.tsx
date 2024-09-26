import { getMovieById } from '@/api/api';
import {MovieDetail} from '@/components/movie/MovieDetail';
import React from 'react'
interface Props {
    searchParams: { id: string };
  }
const MoviePage = async ({ searchParams }: Props) => {
    const movieId = searchParams.id || '';
    const data = await getMovieById(movieId)
  if(!data) return ""
  return (
    <MovieDetail movie={data} />
  )
}

export default MoviePage
