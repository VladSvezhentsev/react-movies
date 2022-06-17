import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { WatchlistCard } from "../components/";

function Watchlist() {
   const { watchlist } = useContext(GlobalContext);

   return (
      <>
         <h1>Watchlist</h1>
         <div className="content">
            {watchlist.length ? (
               watchlist.map((item) => (
                  <WatchlistCard
                     key={item.id}
                     poster={item.poster_path}
                     title={item.title || item.name}
                     rating={item.vote_average}
                     item={item}
                     status="watchlist"
                  />
               ))
            ) : (
               <h2>Your watchlist is empty</h2>
            )}
         </div>
      </>
   );
}

export default Watchlist;
