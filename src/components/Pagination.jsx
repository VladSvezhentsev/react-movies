import { createTheme, ThemeProvider } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const darkTheme = createTheme({
   palette: {
      mode: "dark",
   },
});

function CustomPagination({ setPage, numOfPages = 10 }) {
   const handlePageChange = (page) => {
      setPage(page);
      window.scroll(0, 0);
   };

   return (
      <div className="pagination">
         <ThemeProvider theme={darkTheme}>
            <Pagination
               count={numOfPages}
               onChange={(e) => handlePageChange(e.target.textContent)}
               color="primary"
            />
         </ThemeProvider>
      </div>
   );
}

export default CustomPagination;
