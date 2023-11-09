import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TextControlsExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="contact-name">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contact-email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contact-text-area">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button as="input" type="submit" value="Submit" />{' '}
    </Form>
  );
}

export default TextControlsExample;
