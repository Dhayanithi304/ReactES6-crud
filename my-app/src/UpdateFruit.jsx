import axios from "axios";
import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/esm/Button";
import { Form, useNavigate, useParams } from "react-router-dom";

function UpdateFruit() {
  const fruitName = useRef("");
  const quantity = useRef("");
  const price = useRef("");
  const imageUrl = useRef("");

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/fruits/${id}`).then((res) => {
      fruitName.current.value = res.data.name;
      quantity.current.value = res.data.quantity;
      price.current.value = res.data.price;
      imageUrl.current.value = res.data.imageUrl;
    });update-fruit
  }, []);

  const updateFruitHandler = () => {
    var payLoad = {
      name: fruitName.current.value,
      quantity: quantity.current.value ? Number(quantity.current.value) : 0,
      price: price.current.value ? Number(price.current.value) : 0,
      imageUrl: imageUrl.current.value
    };

    axios.put(`http://localhost:4000/fruits/${id}`, payLoad).then((res) => {
      navigate("/");
    });
  };
  return (
    <>
      <legend>Update</legend>
      <Form>
        <Form.Group className="mb-3" controlId="fromName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={fruitName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fromQuantity">
          <Form.Label>Quantity(KG Units)</Form.Label>
          <Form.Control type="number" ref={quantity} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fromPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" ref={price} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fromImageUrl">
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control type="text" ref={imageUrl} />
        </Form.Group>
        <Button variant="primary" type="button" onClick={updateFruitHandler}>
          Update
        </Button>
      </Form>
    </>
  );
}

export default UpdateFruit;
