import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function App() {
}
function MyForm() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    var contador=0;
    for(let i=0; i<inputValue.length; i++)
    {
      if(inputValue[i]=='a' || inputValue[i]=='e' || inputValue[i]=='i' || inputValue[i]=='o' || inputValue[i]=='u')
      contador++;
    }
    alert(contador);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default MyForm;