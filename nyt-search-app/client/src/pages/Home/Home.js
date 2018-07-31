import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Form, Input } from 'reactstrap';

import DeleteBtn from "../../components/DeleteBtn";
import Results from "../../components/Results";
import Saved from "../../components/Saved";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import './Home.css';

class Home extends Component {
  state = {
    articles: [],
    keyword: "",
    numRetrieve: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {
    // this.loadArticles();
  }

  // loadArticles = () => {
  //   API.getArticles()
  //     .then(res =>
  //       this.setState({ articles: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteArticle = id => {
  //   API.deleteArticle(id)
  //     .then(res => this.loadArticles())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.keyword && this.state.numRetrieve) {
  //   	console.log('time to handle form submit')
  //     // API.saveBook({
  //     //   title: this.state.title,
  //     //   author: this.state.author,
  //     //   synopsis: this.state.synopsis
  //     // })
  //     //   .then(res => this.loadBooks())
  //     //   .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
	      <Jumbotron className="col-sm-12 col-md-8">
	        <h1>NY Times Article Search</h1>
	      </Jumbotron>
        <Row className="d-flex justify-content-center">
          <Col className="col-sm-12 col-md-8">
            <form>
              <label for="keyword">Search Term:</label>
              <Input
                value={this.state.keyword}
                onChange={this.handleInputChange}
                name="keyword"
                placeholder="Enter a keyword (required)"
              />
              <label for="numRetrieve">Number of Records to Retrieve:</label>
              <select name="numRetrieve" value={this.state.numRetrieve} onChange={this.handleInputChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
        			</select>
        			<label for="startYear">Start Year (Optional):</label>
              <Input
	              value={this.state.startYear}
	              onChange={this.handleInputChange}
	              name="startYear"
	              placeholder=""
	            />
	            <label for="endYear">End Year (Optional):</label>
              <Input
	              value={this.state.endYear}
	              onChange={this.handleInputChange}
	              name="endYear"
	              placeholder=""
	            />
              <Button
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search Articles
              </Button>
            </form>
          </Col>
        </Row>
        <Jumbotron className="col-sm-12 col-md-8">
        {/*<Row className="d-flex justify-content-center">
          <Col size="md-6 sm-12">*/}
            <Results />
            {/*{this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}*/}
          {/*(</Col>
        </Row>*/}
        </Jumbotron>
        <Jumbotron className="col-sm-12 col-md-8">
            <Saved />
        </Jumbotron>
      </Container>
    );
  }
}

export default Home;
