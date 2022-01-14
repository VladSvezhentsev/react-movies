import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";

function MovieControls({ item, status }) {
   const {
      removeMovieFromWatchlist,
      addMovieToWatched,
      moveToWatchlist,
      removeFromWatched,
   } = useContext(GlobalContext);

   return (
      <>
         {status === "watchlist" && (
            <div className="inner-card-controls">
               <VisibilityIcon
                  onClick={() => addMovieToWatched(item)}
                  style={{ marginRight: 5 }}
                  color="primary"
               />
               <CloseIcon
                  onClick={() => removeMovieFromWatchlist(item.id)}
                  color="primary"
               />
            </div>
         )}
         {status === "watched" && (
            <div className="inner-card-controls">
               <VisibilityOffIcon
                  onClick={() => moveToWatchlist(item)}
                  style={{ marginRight: 5 }}
                  color="primary"
               />
               <CloseIcon
                  onClick={() => removeFromWatched(item.id)}
                  color="primary"
               />
            </div>
         )}
      </>
   );
}

export default MovieControls;
