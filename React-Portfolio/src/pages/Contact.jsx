import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { checkText, validateEmail } from '../utils/helpers';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setText(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Please enter valid text');
      return;
    }

    if (!checkText(name, text)) {
      setErrorMessage(
        `Please don't leave this text area blank when submitting a message`
      );
      return;
    }

    setName('');
    setText('');
    setEmail('');
  };

  return (
    <Form onSubmit={handleFormSubmit} style={{ marginTop: '125px'}}>
      <Form.Group className="mb-3" controlId="contact-name">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contact-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={handleInputChange}
          type="email"
          name="email"
          placeholder="name@example.com"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contact-text-area">
        <Form.Label>Please Enter Your Comments Here</Form.Label>
        <Form.Control
          value={text}
          onChange={handleInputChange}
          as="textarea"
          rows={3}
          name="text"
        />
      </Form.Group>
      <Button as="input" type="submit" value="Submit" style={{ marginBottom: '22px'}}/>{' '}
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </Form>
  );
}

export default ContactForm;
