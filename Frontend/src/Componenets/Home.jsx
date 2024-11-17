// src/components/Home.jsx
import React from 'react';
import { Navbar, Nav, Container, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from './Footer'; // Assuming Footer is defined in src/components/Footer.js

const Home = () => {
  const bookSections = [
    {
      title: "Best Sellers",
      books: [
        { title: 'RICH DAD POOR DAD', imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524451661i/39924789.jpg' },
        { title: 'THINK AND GROW RICH', imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg' },
        { title: "DON'T LET HER STAY", imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674147285i/80830635.jpg' },
        { title: 'KILLING THE WITCHES', imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675642559i/65214203.jpg' },
      ]
    },
    {
      title: "Top Recommendations",
      books: [
        { title: 'HARRY POTTER', imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251.jpg' },
        { title: 'ELON MUSK', imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692288251i/122765395.jpg' },
        { title: 'THE MOSQUITO', imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544102229i/42983957.jpg' },
        { title: 'JOURNEY ON THE JAMES', imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347493537i/1979210.jpg' }
      ]
    }
  ];

  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ color: 'white', textDecoration: "none" }}>PVRS BookStore</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/login" style={{ padding: "10px", color: "white", textDecoration: "none" }}>User</Link>
              <Link to="/slogin" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Seller</Link>
              <Link to="/alogin" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Admin</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {bookSections.map((section, idx) => (
        <div key={idx} className="text-center my-5">
          <h1>{section.title}</h1>
          <div className="d-flex justify-content-center flex-wrap">
            {section.books.map((book, index) => (
              <Card key={index} style={{ width: '18rem', margin: "1rem" }}>
                <Link to="/uproducts">
                  <Card.Img variant="top" src={book.imgSrc} />
                </Link>
                <Card.Body>
                  <Card.Title className='text-center'>{book.title}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <Footer />
    </div>
  );
};

export default Home;
