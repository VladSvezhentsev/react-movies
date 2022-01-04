import { Route, Routes } from "react-router-dom";
import { Header, Navbar } from "./components";
import { Trending, Movies, Series, Search } from "./pages";

function App() {
   return (
      <>
         <Header />
         <div className="app">
            <Routes>
               <Route path="/" element={<Trending />} />
               <Route path="/movies" element={<Movies />} />
               <Route path="/series" element={<Series />} />
               <Route path="/search" element={<Search />} />
            </Routes>
         </div>
         <Navbar />
      </>
   );
}

export default App;
