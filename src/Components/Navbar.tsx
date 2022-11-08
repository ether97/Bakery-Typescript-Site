import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CSS from "csstype";
import { useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const btnDesign =
    location.pathname === "/" ? "outline-light" : "outline-dark";
  const backgroundColor = location.pathname === "/" ? "transparent" : "white";

  return (
    <NavbarBs
      fixed="top"
      style={{
        height: "5vh",
        position: "fixed",
        width: "100%",
        background: backgroundColor,
      }}
    >
      <Container>
        <Nav className="d-flex justify-content-between w-100">
          <Nav.Link to={"/"} as={NavLink}>
            <Button
              variant={btnDesign}
              style={{
                outline: "none",
                padding: "5px 50px 5px 50px",
                fontFamily: "Playfair Display, serif",
                fontSize: "1rem",
              }}
            >
              Home
            </Button>
          </Nav.Link>
          <Nav.Link to={"/store"} as={NavLink}>
            <Button
              variant={btnDesign}
              style={{
                outline: "none",
                padding: "5px 50px 5px 50px",
                fontFamily: "Playfair Display, serif",
                fontSize: "1rem",
              }}
            >
              Store
            </Button>
          </Nav.Link>
          <Nav.Link to={"/about"} as={NavLink} style={{ color: "white" }}>
            <Button
              variant={btnDesign}
              style={{
                outline: "none",
                padding: "5px 50px 5px 50px",
                fontFamily: "Playfair Display, serif",
                fontSize: "1rem",
              }}
            >
              About
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
