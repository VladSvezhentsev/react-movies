import { useEffect, useState } from "react";
import {
   Button,
   createTheme,
   Tab,
   Tabs,
   TextField,
   ThemeProvider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Card, CustomPagination } from "../components";

const darkTheme = createTheme({
   palette: {
      mode: "dark",
      primary: {
         main: "#fff",
      },
   },
});

function Search() {
   const [type, setType] = useState(0);
   const [page, setPage] = useState(1);
   const [searchText, setSearchText] = useState("");
   const [items, setItems] = useState([]);
   const [numOfPages, setNumOfPages] = useState();

   const onInputChange = (e) => setSearchText(e.target.value);

   const fetchSearch = async () => {
      const { data } = await axios.get(
         `https://api.themoviedb.org/3/search/${
            type ? "tv" : "movie"
         }?api_key=${
            process.env.REACT_APP_API_KEY
         }&language=uk-UA&query=${searchText}&page=${page}&include_adult=false`
      );

      setItems(data.results);
      setNumOfPages(data.total_pages);
   };

   useEffect(() => {
      window.scroll(0, 0);
      fetchSearch();
   }, [type, page]);

   return (
      <div>
         <ThemeProvider theme={darkTheme}>
            <div className="input-field">
               <TextField
                  style={{ flex: 1 }}
                  className="search-box"
                  label="Пошук"
                  variant="filled"
                  onChange={onInputChange}
               />
               <Button
                  onClick={fetchSearch}
                  variant="contained"
                  style={{ marginLeft: 10 }}
               >
                  <SearchIcon />
               </Button>
            </div>
            <Tabs
               style={{ marginBottom: 20 }}
               value={type}
               indicatorColor="primary"
               textColor="primary"
               onChange={(event, newValue) => {
                  setType(newValue);
                  setPage(1);
               }}
            >
               <Tab style={{ width: "50%" }} label="Фільми" />
               <Tab style={{ width: "50%" }} label="Серіали" />
            </Tabs>
         </ThemeProvider>
         <div className="content">
            {items &&
               items.map((item) => (
                  <Card
                     key={item.id}
                     id={item.id}
                     type={type ? "tv" : "movie"}
                     poster={item.poster_path}
                     title={item.title || item.name}
                     date={item.release_date || item.first_air_date}
                     rating={item.vote_average}
                     item={item}
                  />
               ))}
         </div>
         {numOfPages > 1 && (
            <CustomPagination setPage={setPage} numOfPages={numOfPages} />
         )}
      </div>
   );
}

export default Search;
