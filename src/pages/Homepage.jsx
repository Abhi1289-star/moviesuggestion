import MovieCard from "../components/MovieCard"
import"../css/Homepage.css"
import { searchMovies, getPopularMovies } from "../services/api";

import { useState,useEffect } from "react";

function Homepage(){
    const[searchQuery,setSearchQuery]=useState("")
    const [movies,setMovies]= useState([]);
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(true);
useEffect(()=>{
    const loadPopularMovies= async()=>{
        try{
            const popularMovies= await getPopularMovies()
            setMovies(popularMovies)
        } catch(err){
            console.log(err)
            setError("failed to load movies....")
        }
        finally{
            setLoading(false)
        }
    }
    loadPopularMovies()
},[])

    const handleSearch= async (e)=>{
        e.preventDefault();

if(!searchQuery.trim()) return

if(loading) return

setLoading(true)
try{
const searchResults=await searchMovies(searchQuery)
setMovies(searchResults)
setError(null)
}catch(err){
    console.log(err)
setError("failed to search movies...")
}finally{
    setLoading(false)
}




setSearchQuery(" ")
    }
    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search_form">
                <input type="text" placeholder="search for movies..." className="search-input" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}></input>
                <button type="submit" className="search_button">search</button>
            </form>

        {error && <div className="error-message">{error}</div>}

            {loading ?<div className="loading">Loading....</div>
            :
                <div className="movies-grid">
                {movies.map((movie)=>
                    (<MovieCard movie={movie} key={movie.id}/>)
                     )}
            </div>}
            
        </div>
    );
}
export default Homepage