import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CustomPagination, Genres } from "../components";
import useGenres from "../hooks/useGenres";

function Series() {
   const [items, setItems] = useState([]);
   const [page, setPage] = useState(1);
   const [numOfPages, setNumOfPages] = useState();
   const [genres, setGenres] = useState([]);
   const [selectedGenres, setSelectedGenres] = useState([]);
   const genreForURL = useGenres(selectedGenres);

   const fetchSeries = async () => {
      const { data } = await axios.get(
         `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=uk-UA&&region=UA&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`
      );

      setItems(data.results);
      setNumOfPages(data.total_pages);
   };

   useEffect(() => {
      fetchSeries();
   }, [page, numOfPages, genreForURL]);

   return (
      <div>
         <h1>Серіали</h1>
         <Genres
            type="tv"
            setPage={setPage}
            genres={genres}
            setGenres={setGenres}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
         />
         <div className="content">
            {items &&
               items.map((item) => (
                  <Card
                     key={item.id}
                     id={item.id}
                     type="tv"
                     poster={item.poster_path}
                     title={item.name}
                     date={item.first_air_date}
                     rating={item.vote_average}
                     item={item}
                  />
               ))}
         </div>
         {numOfPages > 1 && (
            <CustomPagination setPage={setPage} numOfPages={numOfPages} />
         )}
      </div>
   );
}

export default Series;
