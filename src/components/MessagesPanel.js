import React from "react";
import { Form, Button } from "react-bootstrap";

class MessagePanel extends React.Component {
  render() {
    let { itemId, selectItem, purchase, message } = this.props;
    return (
      <Form>
        <Form.Group controlId="message">
          <h3 className="text-center">Message</h3>
          <Form.Control
            type="text"
            placeholder=""
            name="message"
            value={message}
          />
        </Form.Group>
        <Form.Group controlId="item">
          <Form.Label>Item: </Form.Label>
          <Form.Control
            type="text"
            placeholder=" "
            name="item"
            value={itemId}
          />
        </Form.Group>
        <Button variant="success" onClick={purchase}>
          Make Purchase
        </Button>
      </Form>
    );
  }
}

export default MessagePanel;
