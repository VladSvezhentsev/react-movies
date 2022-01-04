import axios from "axios";
import { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";

function Genres({
   type,
   setPage,
   genres,
   setGenres,
   selectedGenres,
   setSelectedGenres,
}) {
   const handleAdd = (genre) => {
      setSelectedGenres([...selectedGenres, genre]);
      setGenres(genres.filter((g) => g.id !== genre.id));
      setPage(1);
   };

   const handleRemove = (genre) => {
      setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
      setGenres([...genres, genre]);
      setPage(1);
   };

   const fetchGenres = async () => {
      const { data } = await axios.get(
         `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=uk-UA&`
      );

      setGenres(data.genres);
   };

   useEffect(() => {
      fetchGenres();

      return () => {
         setGenres([]);
      };
   }, []);

   return (
      <div className="genres">
         {selectedGenres &&
            selectedGenres.map((genre) => (
               <Chip
                  onDelete={() => handleRemove(genre)}
                  key={genre.id}
                  label={genre.name}
                  style={{ margin: 6, backgroundColor: "#1124CD" }}
                  color="primary"
                  size="small"
                  clickable
               />
            ))}
         {genres &&
            genres.map((genre) => (
               <Chip
                  onClick={() => handleAdd(genre)}
                  key={genre.id}
                  label={genre.name}
                  style={{ margin: 6, backgroundColor: "white" }}
                  size="small"
                  clickable
               />
            ))}
      </div>
   );
}

export default Genres;
