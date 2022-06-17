import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { WatchlistCard } from "../components/";

function Watched() {
   const { watched } = useContext(GlobalContext);

   return (
      <>
         <h1>Watched</h1>
         <div className="content">
            {watched.length ? (
               watched.map((item) => (
                  <WatchlistCard
                     key={item.id}
                     poster={item.poster_path}
                     title={item.title || item.name}
                     rating={item.vote_average}
                     item={item}
                     status="watched"
                  />
               ))
            ) : (
               <h2>Your watched list is empty</h2>
            )}
         </div>
      </>
   );
}

export default Watched;
