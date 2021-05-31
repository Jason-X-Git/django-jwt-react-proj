import React, { Component } from "react";
import axiosInstance from "../axiosApi";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };

    this.getMessage = this.getMessage.bind(this);
  }

  getMessage() {
    axiosInstance
      .get("/hello/")
      .then((response) => {
        const message = response.data.hello;
        const user = response.data.user;
        console.log("Response: ", response)
        console.log("Message: ", message)
        this.setState({
          message: message,
          user: user,
        });
      })
      .catch((error) => {
        console.log("Error: ", JSON.stringify(error, null, 4));
        throw error;
      });
  }

  componentDidMount() {
    // It's not the most straightforward thing to run an async method in componentDidMount

    // Version 1 - no async: Console.log will output something undefined.
    this.getMessage();
    console.log('State: ', this.state);
  }

  render() {
    return (
      <div>
        <p>{this.state.message} from {this.state.user}</p>
      </div>
    );
  }
}

export default Hello;
