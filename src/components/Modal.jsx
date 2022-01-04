import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import axios from "axios";
import { img_500, unavailable, unavailableLandscape } from "../config/config";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Carousel from "./Carousel";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "90%",
   height: "80%",
   backgroundColor: "#39445a",
   border: "1px solid #282c34",
   borderRadius: 10,
   color: "white",
   boxShadow: 24,
   p: 4,
};

function ContentModal({ children, type, id }) {
   const [open, setOpen] = useState(false);
   const [content, setContent] = useState();
   const [video, setVideo] = useState();

   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const fetchData = async () => {
      const { data } = await axios.get(
         `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=uk-UA`
      );

      setContent(data);
   };

   const fetchVideo = async () => {
      const { data } = await axios.get(
         `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${
            process.env.REACT_APP_API_KEY
         }&language=${"uk - UA" || "ru-Ru" || "en - US"}`
      );

      setVideo(data.results[0]?.key);
   };

   useEffect(() => {
      fetchData();
      fetchVideo();
   }, []);

   return (
      <>
         <div className="media" onClick={handleOpen}>
            {children}
         </div>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
         >
            <Fade in={open}>
               <Box sx={style}>
                  {content && (
                     <div className="content-modal">
                        <img
                           className="content__portrait"
                           src={
                              content.poster_path
                                 ? `${img_500}/${content.poster_path}`
                                 : unavailable
                           }
                           alt="poster"
                        />
                        <img
                           className="content__landscape"
                           src={
                              content.backdrop_path
                                 ? `${img_500}/${content.backdrop_path}`
                                 : unavailableLandscape
                           }
                           alt="poster"
                        />
                        <div className="content__about">
                           <span className="content__title">
                              {content.name || content.title} (
                              {(
                                 content.first_air_date ||
                                 content.release_date ||
                                 "-----"
                              ).substring(0, 4)}
                              )
                           </span>
                           {content.tagline && (
                              <i className="tagline">{content.tagline}</i>
                           )}
                           <span className="content__description">
                              {content.overview}
                           </span>
                           <div>
                              <Carousel type={type} id={id} />
                           </div>
                           <Button
                              variant="contained"
                              startIcon={<YouTubeIcon />}
                              color="secondary"
                              target="_blank"
                              href={`https://www.youtube.com/watch?v=${video}`}
                           >
                              Дивитись трейлер
                           </Button>
                        </div>
                     </div>
                  )}
               </Box>
            </Fade>
         </Modal>
      </>
   );
}

export default ContentModal;
