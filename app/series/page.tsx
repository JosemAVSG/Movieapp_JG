import axios from "axios";
import styles from "@/styles/styles.module.css";
import Image from "next/image";
interface SeriesData {
  id: number;
  name: string;
  poster_path: string;
  duration: string;
  vote_average: number;
  first_air_date: string;
  overview:string;
}
const Series = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTA2YTM2ZmY5YmMwYzhkNzRlYTRhMDRjYzk4YzgxZCIsInN1YiI6IjY1ZGNiOGNmZjZmZDE4MDE3YzU5M2M5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kpgbm8Gu_ssq7GnS53Nb2XaypgDxpDXwsxlsMt2cqKE'
    }
  };
  try {
    const response = await axios.get(

      'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
    options
    );
  
    const data = response.data;

    return data;
  } catch (error) {
    console.error("Error fetching series data:", error);
  }
};
const renderSeries = async () => {
  const seriesData = await Series();

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 md:grid-cols-4 sm:grid-cols-2 min-[320px]:grid-cols-1 max:-[600px]:grid-cols-1 m-5 ">
        {seriesData.results.map((element: SeriesData) => (
          <div key={element.id} className={styles.card}>
            <h2>{element.name}</h2>
            <Image
              src={ `https://image.tmdb.org/t/p/w500${element.poster_path}`}
              alt={element.name}
              width={300}
              height={300}
            ></Image>
            <div key={element.id}>
        
              <p>
                <strong>Fecha de Estreno:</strong> {element.first_air_date}
              </p>
              <p>
                <strong>Rate:</strong> {element.vote_average}/10
              </p>
          
              <p>
                <strong>Duracion:</strong> {element.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default renderSeries;
