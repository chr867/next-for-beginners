import { getMovie } from "../../../../../components/movie-info";
import { API_URL } from "../../../../constants";

export async function getMovieCredits(id:string){
  await new Promise((resolve) =>{ setTimeout(resolve, 1000) })
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({params: {id}}: {params: {id:string}}){
  const movie = await getMovie(id);
  const movieCredits = await getMovieCredits(id);
  console.log(movieCredits);

  return(
    <div>
      <div>
        <img src={movie.poster_path} alt={movie.title}></img>
        <h1>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        {
          movieCredits.map(credit => 
            <div key={credit.id}>
              <h3>{credit.name}</h3>
              {
                credit.profile_path != null 
                 ? <img 
                    key={credit.id}
                    src={credit.profile_path}
                    alt={credit.original_name}
                   ></img>
                : ""
              }
            </div>
          )
        }
      </div>
    </div>
  );
}