import React from "react";
import { Form } from "react-bootstrap";

class ChangePanel extends React.Component {
  render() {
    let { change } = this.props;
    return (
      <Form>
        <Form.Group controlId="change">
          <Form.Label>
            <h3 className="text-center">Change</h3>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="change"
            value={change}
          />
        </Form.Group>
      </Form>
    );
  }
}
export default ChangePanel;
