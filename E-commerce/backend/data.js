import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Saebe',
      email: 'sonorasaebe@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Yennin',
      email: 'yarethgracia@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {

      name: 'Excavadora',
      slug: 'excavadora-amarilla',
      category: 'Maquinaria',
      image: '/images/e1.jpg',
      price: 2000000,
      countInStock: 5,
      brand: 'brand',
      rating: 1,
      numReviews: 10,
      description: 'Excavadora de color amarillo',
    },
    {
      
      name: 'Libros de historia',
      slug: 'libros-de-historia',
      category: 'Libros',
      image: '/images/l1.jpg',
      price: 30,
      countInStock: 5,
      brand: 'ghandi',
      rating: 2,
      numReviews: 10,
      description: 'libro de historia del banco de mexico',
    },
    {
      
      name: "adorno",
      slug: "adorno",
      category: "decoracion",
      image: "/images/d1.jpg",
      price: 30,
      countInStock: 0,
      brand: "madera",
      rating:4,
      numReviews: 10,
      description: "Lindo adorno de madera",
    },
    {
      
      name: "predio",
      slug: "predio",
      category: "terrenos",
      image: "/images/c1.jpg",
      price: 319000.00,
      countInStock: 1,
      brand: "n/a",
      rating: 5,
      numReviews: 10,
      description: "Lterreno en la coloni los jardines",
    },
  ],
};

export default data;
