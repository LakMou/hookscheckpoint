import React, { useState, useRef, useEffect } from "react"
import './App.css';
import MoviesList from './components/MoviesList'
import SearchBar from './components/SearchBar'
import AddMovie from './components/AddMovie'
import { moviesArray } from './assets/MookData'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [movieList, setMovieList] = useState(moviesArray)
  const [searchWord, setSearchWord] = useState('')
  const [ratingSearch, setRatingSearch] = useState(0)
  const handleSearch = (e) => setSearchWord(e.target.value)
  console.log(`searchWord: ${searchWord}`)
  const addMovie = (newMovie) => {
    setMovieList([...movieList, newMovie])
  }
  return (
    <div className="App">
      <SearchBar
        handleSearch={handleSearch} 
        ratingSearch={ratingSearch}
        setRatingSearch= {setRatingSearch}/>
      <MoviesList moviesArray={
          searchWord 
          ? movieList.filter((movie) =>
              movie.title.toLowerCase().includes(searchWord.toLowerCase())
          )
          : ratingSearch > 1
          ? movieList.filter((movie)=> movie.rate >= ratingSearch)
          : movieList
          } />
      <AddMovie handleAdd={addMovie} />
    </div>
  )
}
export default App;