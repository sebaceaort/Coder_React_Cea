import { NavLink } from "react-router-dom";
export const NavItem = ({ title, path }) => {
  return (
    <NavLink className="nav-link" aria-current="page" to={path}>
      {title}
    </NavLink>
  );
};
