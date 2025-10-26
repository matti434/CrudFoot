import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router";

const Menu = () => {
  const navigate = useNavigate();

  const abrirLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={"/"} className="fs-2">
            Crud Food
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink as={Link} to={"/"} className={"nav-link"}>
                HOME
              </NavLink>
              <NavLink
                onClick={abrirLogin}
                className={"nav-link"}
                style={{ cursor: "pointer" }}
              >
                LOGIN
              </NavLink>{" "}
              <NavLink
                onClick={abrirLogin}
                className={"nav-link"}
                style={{ cursor: "pointer" }}
              >
                REGISTER
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Menu;
