import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function Layout(props) {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="success">
        <Container>
          <Navbar.Brand>Fruits Bucket</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>{props.children}</Container>
    </div>
  );
}

export default Layout;
