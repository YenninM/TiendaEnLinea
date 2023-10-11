import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Iniciar Sesión</h1>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          {' '}
          <Link to={`/signup?redirect=${redirect}`}>Crear Cuenta</Link>
        </div>
        <div className="mb-3">
          <Button type="submit">Iniciar Sesión</Button>
        </div>
        
      </Form>
    </Container>
  );
}