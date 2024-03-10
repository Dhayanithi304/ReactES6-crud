import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function AllFruits() {
  const [allFruits, setAllFruits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/fruits").then((res) => {
      setAllFruits(res.data);
    });
  }, []);

  return (
    <>
      <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <Button variant="primary" onClick={() => navigate("/add-fruit")}>
            Add New Fruit
          </Button>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-2">
        {allFruits.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Quantity(KG units) {item.quantity}</Card.Text>
                <Card.Text>Price {item.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/update-fruit/${item.id}`)}
                >
                  Edit
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AllFruits;
