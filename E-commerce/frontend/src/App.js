import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/NavBar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { Store } from "./Store";
import CartScreen from "./screens/CartScreen";
import PreFooter from "./components/PreFooter";
import SigninScreen from "./screens/SigninScreen";
import logo from "./images/LogoSaebe.png";
import transparencia from "./images/portaldetransparencia.png";
import directorio from "./images/directorio.png";
import ges from "./images/GES.png";
import { FaTwitter, FaFacebook, FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar className="navbar-custom" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img
                    src={logo}
                    width="280"
                    height="100"
                    className="d-inline-block align-top"
                    alt="Logo"
                  />
                </Navbar.Brand>
              </LinkContainer>
              <Nav className="ms-auto">
              <Link to="/" className="nav-link">
                  INICIO
                </Link>
                <Link to="/" className="nav-link">
                  VENTAS
                </Link>
                <Link to="/" className="nav-link">
                  AYUDA
                </Link>
                <Link to="/cart" className="nav-link">
                  CONTACTAR
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <div className="d-flex justify-content-center align-items-center mt-3">
          <a href="https://transparencia.sonora.gob.mx" className="btn mx-4" target="_blank" rel="noopener noreferrer">
            <img src={transparencia} alt="Portal de Transparencia" />
          </a>
          <a href="https://www.sonora.gob.mx" className="btn mx-4" target="_blank" rel="noopener noreferrer">
            <img src={directorio} alt="Directorio" />
          </a>

          <a href="https://www.sonora.gob.mx" className="btn mx-4" target="_blank" rel="noopener noreferrer">
            <img src={ges} alt="Botón 2" />
          </a>
        </div>
        <PreFooter />

        <footer>
          <div className="main-footer">
            <div className="container">
              <div className="row">
                <div className="col">
                  <a href="tel://911" target="_blank" rel="noreferrer">
                    <img
                      className="footer-img"
                      src="https://www.sonora.gob.mx//images/template/logo-sonora.svg"
                      alt="911 Número de Emergencias"
                      title="911 Número de Emergencias"
                    />
                  </a>
                </div>
                <div className="col"></div>
                <div className="col">
                  <ul className="list-unstyled">
                    <div className="social-icons">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok/>
                      </a>
                      <a href="https://Youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube/>
                      </a>
                    </div>
                    <h4>@SAEBE</h4>
                  </ul>
                </div>
                <div className="col">
                  <a href="tel://911" target="_blank" rel="noreferrer">
                    <img
                      className="footer-img"
                      src="https://www.sonora.gob.mx//images/template/911.svg"
                      alt="911 Número de Emergencias"
                      title="911 Número de Emergencias"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
