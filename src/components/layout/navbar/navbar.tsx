import Logo from "./Logo";
import Nav from "./nav";
import Lang from "./language";
const Navbar = () => {
  return (
    <>
      <Logo />
      <nav className="nav">
        <Nav />
      </nav>
      <Lang />
    </>
  );
};
export default Navbar;
