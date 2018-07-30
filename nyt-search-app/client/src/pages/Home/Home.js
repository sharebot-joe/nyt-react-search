import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Results from "../../components/Results";
import Saved from "../../components/Saved";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

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
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>NY Times Article Search</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.keyword}
                onChange={this.handleInputChange}
                name="keyword"
                placeholder="Enter a keyword (required)"
              />
              <select name="numRetrieve" value={this.state.numRetrieve} onChange={this.handleInputChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
        			</select>
              <Input
	              value={this.state.startYear}
	              onChange={this.handleInputChange}
	              name="startYear"
	              placeholder=""
	            />
              <Input
	              value={this.state.endYear}
	              onChange={this.handleInputChange}
	              name="endYear"
	              placeholder=""
	            />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
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
          </Col>
          <Col size="md-6 sm-12">
            <Saved />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
