import { Badge } from "@mui/material";
import { ContentModal, MovieControls } from ".";
import { img_300, unavailable } from "../config/config";

function Card({ id, type, poster, title, date, rating, item, status }) {
   return (
      <ContentModal type={type} id={id} item={item} status={status}>
         <Badge
            badgeContent={rating.toFixed(1)}
            color={rating >= 7 ? "primary" : "secondary"}
         />
         <img
            className="media__image"
            src={poster ? `${img_300}/${poster}` : unavailable}
            alt={title}
         />
         <b className="media__title">{title}</b>
         <span className="media__subtitle">
            {type === "tv" ? "TV Series" : "Movie"}
         </span>
         <span className="media__subtitle">{date}</span>
         <MovieControls item={item} status={status} />
      </ContentModal>
   );
}

export default Card;
