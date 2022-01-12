import React from "react";
import { Navbar, Nav, NavItem, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { useAuthContext } from "../lib/context/AuthContext";

export default function Header() {
  const authContext = useAuthContext();

  return (
    <header>
      <Navbar color="light" light expand="md" className="px-2">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="navbar-brand"
        >
          MOVIES APP
        </Link>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact className="nav-link" to="/movies">
              Movies
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/movies/new">
              Add new movie
            </NavLink>
          </NavItem>
        </Nav>

        {authContext.isAuthenticated ? (
          <Button color="danger" onClick={authContext.logout}>
            Logout
          </Button>
        ) : (
          <Nav className="ml-auto">
            <NavItem>
              <NavLink exact to="/login" className="nav-link">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/register" className="nav-link">
                Register
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </header>
  );
}
