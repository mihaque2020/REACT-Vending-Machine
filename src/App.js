import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ChangePanel from "./components/ChangePanel";
import InputPanel from "./components/InputPanel";
import MessagePanel from "./components/MessagesPanel";
import ProductCard from "./components/ProductCard";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const SERVICE_URL = "http://tsg-vending.herokuapp.com";

class App extends React.Component {
  state = {
    // state variable must match the JSON response body
    loading: false,
    productData: [],
    balance: 0.0,
    formattedBalance: "0.00", //
    itemId: "",
    change: {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    },
    message: "",
  };

  handlePurchase = (event) => {
    this.setState({ loading: true });
    axios({
      method: "POST",
      url:
        SERVICE_URL +
        "/money/" +
        this.state.balance +
        "/item/" +
        this.state.itemId,
    })
      .then((response) => {
        console.log("response", response);

        this.setState({
          change: response.data,
          loading: false,
          message: "Dispensing... Enjoy!",
          balance: 0.0,
          formattedBalance: "0.00",
        });
        this.loadProductData();
      })
      .catch((error) => {
        console.log("error", error.response.data.message);

        this.setState({ message: error.response.data.message });
      });
  };

  loadProductData() {
    this.setState({ loading: true });
    console.log("Loading product data");
    fetch(SERVICE_URL + "/items")
      .then((data) => data.json())
      .then((data) => {
        this.setState({ productData: data, loading: false });
      });
  }

  handleAddDollar = (event) => {
    console.log("add Dollar");
    this.setState({ balance: this.state.balance + 1 }, () => {
      this.formatBalance();
    });

    console.log(this.state.balance);
    console.log(this.state.formattedBalance);

    event.preventDefault();
  };

  handleAddQuarter = (event) => {
    console.log("add Quarter");
    this.setState({ balance: this.state.balance + 0.25 }, () => {
      this.formatBalance();
    });
    event.preventDefault();
  };

  handleAddDime = (event) => {
    console.log("add Dime");
    this.setState({ balance: this.state.balance + 0.1 }, () => {
      this.formatBalance();
    });
    event.preventDefault();
  };

  handleAddNickel = (event) => {
    console.log("add Nickel");
    this.setState({ balance: this.state.balance + 0.05 }, () => {
      this.formatBalance();
    });
    event.preventDefault();
  };

  handleSelectItem = (event, itemId) => {
    console.log(event.target.innerHTML);
    this.setState({ itemId: event.target.innerHTML });
    console.log(itemId);
  };

  componentDidMount() {
    console.log("App is mounted.");
    this.loadProductData();
  }

  formatBalance() {
    this.setState({
      balance: parseFloat(
        (Math.round(this.state.balance * 100) / 100).toFixed(2)
      ),
      formattedBalance: (Math.round(this.state.balance * 100) / 100).toFixed(2),
    });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1 className="text-center">Vending Machine</h1>
          </Col>
        </Row>
        <hr />
        <Row>
          <ProductCard
            products={this.state.productData}
            selectItem={this.handleSelectItem}
          />
          <Col sm={4}>
            <Row>
              <InputPanel
                balance={this.state.balance}
                formattedBalance={this.state.formattedBalance}
                addDollar={this.handleAddDollar}
                addQuarter={this.handleAddQuarter}
                addDime={this.handleAddDime}
                addNickel={this.handleAddNickel}
              />
            </Row>
            <hr />
            <Row>
              <MessagePanel
                itemId={this.state.itemId}
                purchase={this.handlePurchase}
                message={this.state.message}
              />
            </Row>
            <hr />
            <Row>
              <ChangePanel
                change={JSON.stringify(this.state.change)
                  .replace(/"/g, " ")
                  .replace(/{/, "")
                  .replace(/}/, "")}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
