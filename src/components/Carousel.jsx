import { useEffect, useState } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../config/config";

const handleDragStart = (e) => e.preventDefault();

function Carousel({ type, id }) {
   const [credits, setCredits] = useState();

   const items = credits?.map((c) => (
      <div className="carousel-item">
         <img
            src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
            alt={c?.name}
            onDragStart={handleDragStart}
            className="carousel-item__img"
         />
         <b className="carousel-item__text">{c?.name}</b>
      </div>
   ));

   const responsive = {
      0: {
         items: 3,
      },
      512: {
         items: 4,
      },
      1024: {
         items: 7,
      },
   };

   const fetchCredits = async () => {
      const { data } = await axios.get(
         `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=uk-UA`
      );

      setCredits(data.cast);
   };

   useEffect(() => {
      fetchCredits();
   }, []);

   return (
      <AliceCarousel
         items={items}
         responsive={responsive}
         animationDuration={1500}
         mouseTracking
         infinite
         disableButtonsControls
         disableDotsControls
         autoPlay
      />
   );
}

export default Carousel;
