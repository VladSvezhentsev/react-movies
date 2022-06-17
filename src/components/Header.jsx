import { Link } from "react-router-dom";

function Header() {
   return (
      <header className="header" onClick={() => window.scroll(0, 0)}>
         <Link to="/">
            <div className="header__logo">
               <img
                  width={40}
                  height={40}
                  src="./assets/img/icon.jpg"
                  alt="logo"
               />
               <h1>React Movies</h1>
            </div>
         </Link>
         <div className="header__menu">
            <Link to="/watchlist">
               <span>Watchlist</span>
            </Link>
            <Link to="/watched">
               <span>Watched</span>
            </Link>
         </div>
      </header>
   );
}

export default Header;
