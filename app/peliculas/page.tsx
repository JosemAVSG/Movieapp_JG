import axios from "axios";
import styles from "@/styles/styles.module.css";
import Image from "next/image";
interface MoviesData {
  id: number;
  title: string;
  poster_path: string;
  duration: string;
  vote_average: number;
  release_date: string;
  overview:string;
}

const Movies= async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTA2YTM2ZmY5YmMwYzhkNzRlYTRhMDRjYzk4YzgxZCIsInN1YiI6IjY1ZGNiOGNmZjZmZDE4MDE3YzU5M2M5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kpgbm8Gu_ssq7GnS53Nb2XaypgDxpDXwsxlsMt2cqKE'
    }
  };
  try {
    const response = await axios.get(

      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
    );
  
    const data = response.data;

    return data;
  } catch (error) {
    console.error("Error fetching series data:", error);
  }
};
const peliculas= async () => {
  const moviesData = await Movies();
  return (
    
    <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#041e70_100%)]">


    <div className="flex justify-center">
      <div className="grid grid-cols-3 md:grid-cols-4 sm:grid-cols-2 min-[320px]:grid-cols-1 max:-[600px]:grid-cols-1 m-5 ">
        {moviesData.results.map((element: MoviesData) => (
          <div key={element.id} className={styles.card}>
            <h2>{element.title}</h2>
            <Image
              src={ `https://image.tmdb.org/t/p/w500${element.poster_path}`}
              alt={element.title}
              width={300}
              height={300}
            ></Image>
            <div key={element.id}>
        
              <p>
                <strong>Fecha de Estreno:</strong> {element.release_date}
              </p>
              <p>
                <strong>Rate:</strong>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <span
                      key={i}
                      style={{
                        marginRight: "2px",
                        color: Math.floor(element.vote_average / 2)> i ? "#ffc107" : "#e4e5e9",
                      }}
                    >
                      ★
                    </span>
                  ))}
                { (element.vote_average / 2).toFixed(1)+ " / 5"}
                
              </p>
          
              <p>
                <strong>Description:</strong> {element.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default peliculas;