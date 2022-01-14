import { Route, Routes } from "react-router-dom";
import { Header, Navbar } from "./components";
import GlobalProvider from "./context/GlobalState";
import { Trending, Movies, Series, Search, Watchlist, Watched } from "./pages";

function App() {
   return (
      <>
         <GlobalProvider>
            <Header />
            <div className="app">
               <Routes>
                  <Route path="/" element={<Trending />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/series" element={<Series />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/watchlist" element={<Watchlist />} />
                  <Route path="/watched" element={<Watched />} />
               </Routes>
            </div>
            <Navbar />
         </GlobalProvider>
      </>
   );
}

export default App;
