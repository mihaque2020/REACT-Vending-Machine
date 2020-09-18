import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

class ProductCard extends React.Component {
  render() {
    const { selectItem } = this.props;
    // Debug method to monitor incoming product data
    console.log("Rendering Product Cards:");
    console.log(this.props.products);

    return (
      <Container class="mt-4">
        <Col sm={12}>
          <Row>
            {/* <Row col={4} className={"my-2"}> */}
            {this.props.products.map((product, i) => {
              return (
                <Card
                  key={i}
                  className={"h-100 m-1"}
                  display="inline-block"
                  style={{ width: "18rem" }}
                >
                  <Card.Body className="text-center">
                    <Card.Title>{`${product.name}`}</Card.Title>
                    <Card.Text
                      onClick={selectItem}
                    >{`${product.id}`}</Card.Text>
                    <Card.Text>{`Price: ${product.price}`}</Card.Text>
                    <Card.Text>{`Quantity: ${product.quantity}`}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Col>
      </Container>
    );
  }
}

export default ProductCard;
