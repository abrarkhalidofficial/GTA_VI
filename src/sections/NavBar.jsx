const NavBar = () => {
  const handleNavClick = () => {
    window.open("https://github.com/your-github-abrarkhalidofficial", "_blank");
  };

  return (
    <nav onClick={handleNavClick} style={{ cursor: "pointer" }}>
      <img src="/images/nav-logo.svg" className="scale-90" />
      <img src="/images/menu.svg" className="w-10" />
    </nav>
  );
};

export default NavBar;
