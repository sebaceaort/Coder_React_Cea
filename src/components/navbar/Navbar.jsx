import { CartWidget } from "./CartWidget";
import { NavItem } from "./NavItem";
import logo from "../../img/ByMarianela.png";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink to={"/"}>
          <img className="" alt="Brand" src={logo} />
          </NavLink>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavItem title={"Hombre"} path={"/category/hombre"}/>
              <NavItem title={"Mujer" } path={"/category/mujer"}/>
              <NavItem title={"Niños" } path={"/category/niño"}/>
              <NavItem title={"Destacado"} path={"/destacado"}/>
            </div>
          </div>
          <CartWidget number={3} />
        </div>
      </nav>
    </>
  );
};
