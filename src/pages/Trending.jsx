import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CustomPagination } from "../components";

function Trending() {
   const [items, setItems] = useState([]);
   const [page, setPage] = useState(1);

   const fetchTrending = async () => {
      const { data } = await axios.get(
         `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=US&page=${page}`
      );

      setItems(data.results);
   };

   useEffect(() => {
      fetchTrending();
   }, [page]);

   return (
      <>
         <h1>Trending</h1>
         <div className="content">
            {items &&
               items.map((item) => (
                  <Card
                     key={item.id}
                     id={item.id}
                     type={item.media_type}
                     poster={item.poster_path}
                     title={item.title || item.name}
                     date={item.release_date || item.first_air_date}
                     rating={item.vote_average}
                     item={item}
                  />
               ))}
         </div>
         <CustomPagination setPage={setPage} />
      </>
   );
}

export default Trending;
