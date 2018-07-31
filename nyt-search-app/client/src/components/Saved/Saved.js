import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Form, Input } from 'reactstrap';
import API from "../../utils/API";

class Saved extends Component {
  state = {
    // article: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    // API.getBook(this.props.match.params.id)
    //   .then(res => this.setState({ book: res.data }))
    //   .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Jumbotron>
            <h1>
              Saved Articles
              {/*this.state.book.title} by {this.state.book.author*/}
            </h1>
         </Jumbotron>
    </Container>
    );
  }
}

export default Saved;
