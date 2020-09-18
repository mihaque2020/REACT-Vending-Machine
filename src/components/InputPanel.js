import React from "react";
import { Row, Form, Button } from "react-bootstrap";

class InputPanel extends React.Component {
  render() {
    let {
      formattedBalance,
      balance,
      addDollar,
      addQuarter,
      addDime,
      addNickel,
    } = this.props;

    let buttonStyle = {
      padding: "3px",
      margin: "3px",
      display: "inline-block",
    };

    return (
      <Form>
        <Form.Group controlId="balance">
          <h3 className="text-center">Total In:</h3>
          <Form.Control
            type="text"
            placeholder="0.00"
            name="balance"
            value={formattedBalance /*balance*/}
          />
        </Form.Group>
        <Row>
          <Button
            style={buttonStyle}
            variant="primary"
            type="submit"
            onClick={addDollar}
          >
            Add Dollar
          </Button>
          <Button
            style={buttonStyle}
            variant="primary"
            type="submit"
            onClick={addQuarter}
          >
            Add Quarter
          </Button>
        </Row>
        <Row>
          <Button
            style={buttonStyle}
            variant="primary"
            type="submit"
            onClick={addDime}
          >
            Add Dime
          </Button>
          <Button
            style={buttonStyle}
            variant="primary"
            type="submit"
            onClick={addNickel}
          >
            Add Nickel
          </Button>
        </Row>
      </Form>
    );
  }
}

export default InputPanel;
