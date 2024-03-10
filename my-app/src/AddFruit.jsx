import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button' 
import Form from 'react-bootstrap/Form'

function AddFruit() {
  const fruitName = useRef('')
  const quantity = useRef('')
  const price = useRef('')
  const imageUrl = useRef('')

  const navigate = useNavigate();

  const AddFruitHandler = () => {
    const payLoad = {
      name: fruitName.current.value,
      quantity: quantity.current.value ? Number(quantity.current.value) : 0,
      price: price.current.value ? Number(price.current.value) : 0,
      imageUrl: imageUrl.current.value
    } 

    axios.post('http://localhost:4000/fruits', payLoad).then(()=>{
      navigate('/');
    })
  }

  return (
    <div>
      <legend>Create</legend>
      <Form>
        <Form.Group className='mb-3' controlId='fromName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' ref={fruitName} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='fromQuantity'>
          <Form.Label>Quantity(KG Units)</Form.Label>
          <Form.Control type='number' ref={quantity} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='fromPrice'>
          <Form.Label>Price</Form.Label>
          <Form.Control type='number' ref={price} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='fromImageUrl'>
          <Form.Label>ImageUrl</Form.Label>
          <Form.Control type='text' ref={imageUrl} />
        </Form.Group>
        <Button variant='primary' type='button' onClick={AddFruitHandler}>
          Add
        </Button>
      </Form>
    </div>
  )
}

export default AddFruit