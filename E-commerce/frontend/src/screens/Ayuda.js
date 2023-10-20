import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


function Ayuda() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor o realizar otras acciones.
        console.log(formData);
        // Limpia el formulario
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      };
    
      return (
        <div className="container my-5">
          <h2 className="text-center">Ayuda</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo Electrónico:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Asunto:
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
    
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mensaje:
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
    
            <Button type="submit" className="custom-button">
              Enviar
            </Button>
          </form>
        </div>
      );
    }
export default Ayuda;
