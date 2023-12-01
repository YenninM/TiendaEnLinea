import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-steps">
      <Col className={props.step1 ? 'active' : ''}>Iniciar Sesión</Col>
      <Col className={props.step2 ? 'active' : ''}>Contacto</Col>
      <Col className={props.step3 ? 'active' : ''}>Método de Pago</Col>
      <Col className={props.step4 ? 'active' : ''}>Resumen</Col>
    </Row>
  );
}