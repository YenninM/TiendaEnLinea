import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Store } from "./Store";
import CartScreen from "./screens/CartScreen";
import PreFooter from "./components/PreFooter";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import OrderScreen from "./screens/OrderScreen";
import logo from "./images/LogoSaebe.png";
import transparencia from "./images/portaldetransparencia.png";
import directorio from "./images/directorio.png";
import ges from "./images/GES.png";
import { FaTwitter, FaFacebook, FaInstagram, FaTiktok, FaYoutube} from "react-icons/fa";
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import Ayuda from "./screens/Ayuda";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import TopHeader from "./components/TopHeader";
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import Button from 'react-bootstrap/Button';
import { getError } from './utils';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './screens/DashboardScreen';
import AdminRoute from './components/AdminRoute';


//quite el <TopHeader />

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };
  
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? 'd-flex flex-column site-container active-cont'
            : 'd-flex flex-column site-container'
        }
      >
      <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar className="navbar-custom" variant="dark" expand="lg">
            <Container>
            <Button
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>
              <LinkContainer to="/">
                <Navbar.Brand className="d-flex justify-content-center align-items-center">
                  <img
                    src={logo}
                    width="280"
                    height="100"
                    className="d-inline-block align-top"
                    alt="Logo"
                  />
                </Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <SearchBox />
              <Nav className="me-auto w-100 justify-content-end"> 
                  <Link to="/" className="nav-link">
                    INICIO
                  </Link>
                  <NavDropdown title="SAEBE" id="basic-nav-dropdown">
                    <LinkContainer to="/saebelink1">
                      <NavDropdown.Item>VENTAS</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/saebelink2">
                      <NavDropdown.Item>Link 2</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <NavDropdown title="TRANSPARENCIA" id="basic-nav-dropdown">
                    <LinkContainer to="/saebelink1">
                      <NavDropdown.Item>Link 1</NavDropdown.Item>
                    </LinkContainer>
                    
                  </NavDropdown>
                  <Link to="/ayuda" className="nav-link">
                    AYUDA
                  </Link>
                  <Link to="/cart" className="nav-link">
                    ARTÍCULOS
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                  { userInfo ? (
                    <NavDropdown title={userInfo.name.toUpperCase()} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>PERFIL</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>HISTORIAL DE CONTACTO</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="#signout"
                        onClick={signoutHandler}
                      >
                        CERRAR SESIÓN
                      </Link>
                    </NavDropdown>
                  ) : (
                  <Link className="nav-link" to="/signin">INICIAR SESIÓN</Link>
                  )}
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>Gráficos</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/productlist">
                        <NavDropdown.Item>Productos</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orderlist">
                        <NavDropdown.Item>Ordenes</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/userlist">
                        <NavDropdown.Item>Usuarios</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categorías</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`/search/category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/search" element={<SearchScreen />} />

              <Route path="/signin" element={<SigninScreen />} />

              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/profile" element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>}/>
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              <Route path="/ayuda" element={<Ayuda />}/>
              <Route path="/payment" element={<PaymentMethodScreen />}/>
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<ProtectedRoute><OrderScreen /></ProtectedRoute>}></Route>
              <Route
                path="/orderhistory"
                element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                }
              ></Route>

              {/* Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
              ></Route>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
      {/*
      BOTONES DE PRIVACIDAD, PENDIENTES PARA VER SU ACTIVACIÓN 
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-3">
        <a href="https://transparencia.sonora.gob.mx" className="btn my-2 mx-2" target="_blank" rel="noopener noreferrer">
          <img src={transparencia} alt="Portal de Transparencia" />
        </a>
        <a href="https://www.sonora.gob.mx" className="btn my-2 mx-2" target="_blank" rel="noopener noreferrer">
          <img src={directorio} alt="Directorio" />
        </a>
        <a href="https://www.sonora.gob.mx" className="btn my-2 mx-2" target="_blank" rel="noopener noreferrer">
          <img src={ges} alt="Botón 2" />
        </a>
      </div>
      */}   
        <PreFooter />
        
        <footer>
  <div className="main-footer">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-4 mb-3">
          <a href="tel://911" target="_blank" rel="noreferrer">
            <img
              className="footer-img img-fluid"
              src="https://www.sonora.gob.mx//images/template/logo-sonora.svg"
              alt="911 Número de Emergencias"
              title="911 Número de Emergencias"
            />
          </a>
        </div>
        <div className="col-12 col-sm-4 mb-3">
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
        <div className="col-12 col-sm-4 mb-3">
          <a href="tel://911" target="_blank" rel="noreferrer">
            <img
              className="footer-img img-fluid"
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
