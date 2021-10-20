import axios from 'axios'
import { AppState } from '../AppState.js'
import { Movie } from '../models/Movie.js'
import { logger } from '../utils/Logger.js'

const moviesApi = axios.create({
  baseURL: 'https://6wh65vbmy7.execute-api.us-west-2.amazonaws.com/test/movies'
})

class MoviesService {
  async getMovies() {
    const res = await moviesApi.get('')
    AppState.movies = res.data.movies.map(m => new Movie(m))
    logger.log(AppState.movies)
  }

  async searchMovies(searchPhrase) {
    const reg = RegExp(searchPhrase, 'ig')
    window.localStorage.setItem('phrase', searchPhrase)
    const foundMovies = AppState.movies.filter(m => reg.test(m.title))
    logger.log(foundMovies)
    AppState.searchedMovies = foundMovies
  }

  async searchMovieTimes(searchTime) {
    const reg = RegExp(searchTime, 'ig')
    window.localStorage.setItem('time', searchTime)
    const foundMovieTimes = AppState.movies.filter(m => reg.test(m.run_time))
    logger.log(foundMovieTimes)
    AppState.searchedMovies = foundMovieTimes
  }
}
export const moviesService = new MoviesService()
