import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CSS from "csstype";

const navStyle: CSS.Properties = {};

export function Navbar() {
  return (
    <NavbarBs
      style={{
        height: "5vh",
        position: "fixed",
        width: "100%",
        background: "transparent",
      }}
    >
      <Container>
        <Nav className="d-flex justify-content-between w-100">
          <Nav.Link to={"/"} as={NavLink} style={{ color: "white" }}>
            Home
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink} style={{ color: "white" }}>
            Store
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink} style={{ color: "white" }}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
