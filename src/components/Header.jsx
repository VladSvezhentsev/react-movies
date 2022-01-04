function Header() {
   return (
      <header onClick={() => window.scroll(0, 0)}>
         <img width={40} height={40} src="./assets/img/icon.jpg" alt="logo" />
         <h1>React Movies</h1>
      </header>
   );
}

export default Header;
