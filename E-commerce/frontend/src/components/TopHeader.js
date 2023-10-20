import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-escudo-sonora.png"; // Ajusta la ruta de tu imagen de logo

const headerStyle = {
  height: "7rem",
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  width: "24%",
  height: "auto",
  marginLeft: "18mm",
};

const menuStyle = {
  display: "inline-block",
  padding: "0 .5rem",
  lineHeight: "1rem",
  fontSize: "0.9rem",
  margin: "0",
  color: "rgba(255, 255, 255, 0.85)",
  fontFamily: "Montserrat, sans-serif",
  textTransform: "uppercase",
  fontWeight: 550,
  position: "relative",
  transition: "0.3s all ease-in-out",
};

const TopHeader = () => {
  return (
    <div className="top-header" style={headerStyle}>
      <div className="logo" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        <img src={logo} alt="Logo" style={logoStyle} />
      </div>
      <nav className="top-nav">
        <ul style={{ display: "flex", alignItems: "center", marginRight: "100px", fontWeight: 600 }}>
          <li style={menuStyle}>
            <Link to="https://www.sonora.gob.mx/servicios-y-tramites" target="_blank" rel="noopener noreferrer">SERVICIOS Y TRÁMITES</Link>
          </li>
          <li style={menuStyle}>
            <Link to="https://www.sonora.gob.mx/gobierno" target="_blank" rel="noopener noreferrer">GOBIERNO</Link>
          </li>
          <li style={menuStyle}>
            <Link to="https://datos.sonora.gob.mx/" target="_blank" rel="noopener noreferrer">DATOS ABIERTOS</Link>
          </li>
          <li style={menuStyle}>
            <Link to="https://www.visitsonora.mx/" target="_blank" rel="noopener noreferrer">VISITANTES</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopHeader;
