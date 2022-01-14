import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { WatchlistCard } from "../components/";

function Watchlist() {
   const { watchlist } = useContext(GlobalContext);

   return (
      <>
         <h1>Список перегляду</h1>
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
               <h2>Ваш список перегляду порожній</h2>
            )}
         </div>
      </>
   );
}

export default Watchlist;
