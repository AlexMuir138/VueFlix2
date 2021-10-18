const { AppState } = require("../AppState")
const { Movie } = require("../Models/Movie")
const { logger } = require("../utils/Logger")

const moviesApi = axios.create({
  baseURL: 'https://6wh65vbmy7.execute-api.us-west-2.amazonaws.com/test/movies'
})

class MoviesService {
  async getMovies(){
    const res = await moviesApi.get('')
    AppState.movies = res.data.movies.map(m => new Movie(m))
    logger.log(AppState.movies)
  }
}