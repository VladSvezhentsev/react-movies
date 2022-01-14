import { Badge } from "@mui/material";
import { MovieControls } from ".";
import { img_300, unavailable } from "../config/config";

function WatchlistCard({ poster, title, rating, item, status }) {
   return (
      <div className="media">
         <Badge
            badgeContent={rating}
            color={rating >= 7 ? "primary" : "secondary"}
         />
         <img
            className="media__image"
            src={poster ? `${img_300}/${poster}` : unavailable}
            alt={title}
         />
         <b className="media__title">{title}</b>
         <MovieControls item={item} status={status} />
      </div>
   );
}

export default WatchlistCard;
