import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function NavbarNav() {
  return (
    <div>
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary  ">
        <Container fluid>
          <div className="ms-5  ">
            <i class="fa-solid fa-book-open fs-4 text-primary "></i>
            <LinkContainer to={"/"}>
              <Navbar.Brand className="ms-2 fs-4 fw-bold  ">
                BookHub
              </Navbar.Brand>
            </LinkContainer>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto me-5 my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <LinkContainer to={"/"}>
                <Nav.Link className="me-3 fs-5 fw-bold ">Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to={"/"}>
                <Nav.Link className="me-3 fs-5 fw-bold ">About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/add"}>
                <Nav.Link className="fs-5 fw-bold text-primary">
                  Add Books
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarNav;