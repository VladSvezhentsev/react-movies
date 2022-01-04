import { Badge } from "@mui/material";
import { ContentModal } from ".";
import { img_300, unavailable } from "../config/config";

function Card({ id, type, poster, title, date, rating }) {
   return (
      <ContentModal type={type} id={id}>
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
         <span className="media__subtitle">
            {type === "tv" ? "Серіал" : "Фільм"}
         </span>
         <span className="media__subtitle">{date}</span>
      </ContentModal>
   );
}

export default Card;
