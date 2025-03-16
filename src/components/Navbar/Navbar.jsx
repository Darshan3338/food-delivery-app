import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../Navbar/Navbar.css";
import { Badge } from "react-bootstrap";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const NavigationBar = ({setshowLogin}) => {
  const cartItemCount = 3;
  return (
    <Navbar
      style={{ backgroundColor: "red" }}
      variant="dark"
      expand="lg"
      className="d-flex align-items-center w-100"
    >
      <Container fluid className="p-0">
        <Navbar.Brand as={Link} to="/" className="me-0">
          <img
            src="./src/assets/frontend_assets/foodlogo.jpg"
            alt="food-logo"
            className="img-fluid rounded-circle me-3"
            style={{ height: "60px", width: "auto" }}
          />
          <span className="fw-bold fs-5">Food Delivery App</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="my-menu"
          className="ms-auto border-0 shadow-none fs-3"
        />
        <Navbar.Collapse id="my-menu" className="w-100">
          <Nav className="mx-auto d-flex flex-lg-row align-items-center gap-3">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <a
              href="#explore-menu"
              className="nav-link"
              style={{ textDecoration: "none" }}
            >
              Menu
            </a>
            <a
              href="#footer"
              className="nav-link"
              style={{ textDecoration: "none" }}
            >
              Contact Us
            </a>

            {/* <Nav.Link as={Link} to="/menu" className="nav-link">
              Menu
            </Nav.Link> */}
            {/* <Nav.Link as={Link} to="/contact-us" className="nav-link">
              Contact Us
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Nav className="d-flex flex-column flex-lg-row align-items-center gap-3">
        {/* //search-Icon */}
        <Nav.Link as={Link} to={"/search"} className="nav-link">
          <FaSearch size={20} />
        </Nav.Link>
        <Nav.Link className="register-btn" onClick={()=>setshowLogin(true)}>
          Sign In
        </Nav.Link>
        {/* Cart-Icon with badge */}
        <Nav.Link
          as={Link}
          to="/cart"
          className="nav-link d-flex align-items-center"
        >
          <div className="cart-icon-container position-relative">
            <FaShoppingCart size={22} />

            {cartItemCount > 0 && (
              <Badge bg="danger" pill className="cart-badge">
                {cartItemCount}
              </Badge>
            )}
          </div>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
