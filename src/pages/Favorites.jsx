import"../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites(){
    const{favorites}=useMovieContext();

    if(favorites){
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
            <div className="movies-grid">
                {favorites.map((movie)=>
                    (<MovieCard movie={movie} key={movie.id}/>)
                    )}
            </div>
            </div>
            )
        
    }
    return(
        <div className="favorites_empty">
            <h2>no favorites movies yet</h2>
            <p>start adding movies to your favorites and they will appear here</p>
        </div>
    )
}
export default Favorites;