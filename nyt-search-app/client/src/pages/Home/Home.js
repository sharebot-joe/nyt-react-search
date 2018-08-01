import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Form, Input } from 'reactstrap';

// import DeleteBtn from "../../components/DeleteBtn";
import Results from "../../components/Results";
import Saved from "../../components/Saved";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	// value:"",
    	articles: [],
	    keyword: "",
	    numRetrieve: 1,
	    startYear: "",
	    endYear: ""
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    this.buildQueryURL = this.buildQueryURL.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

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

  handleInputChange = (event) => {
  	const { name, value } = event.target;
  	this.setState({
  	  [name]: value
  	});
  	console.log(event.target.value)
  }

  // handleInputChange(event) {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  //   console.log(event.target.value)
  // }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.keyword && this.state.numRetrieve) {
    	console.log(this.state.keyword && this.state.numRetrieve)
    	let query = this.buildQueryURL(this.state)
      API.getResults(query)
        .then(res => {
          // console.log(res.data.items);
          this.setState({
          	  articles: res.data.items
          }, function () {
              console.log(this.state.articles);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  buildQueryURL(state) {
    // queryURL is the url we'll use to query the API
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    // add the api key parameter (the one we received when we registered)
    queryURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    // grab text the user typed into the search input, add as parameter to url
    var searchTerm = this.state.keyword
    queryURL += "&q=" + searchTerm;

    // if the user provides a startYear, include it in the queryURL
    var startYear = this.state.startYear
    queryURL += "&begin_date=" + startYear + "0101";

    // if the user provides an endYear, include it in the queryURL
    var endYear = this.state.endYear
    queryURL += "&end_date=" + endYear + "0101";


    // Logging the URL so we have access to it for troubleshooting
    console.log("---------------\nURL: " + queryURL + "\n---------------");

    return queryURL;
  }

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
                disabled={!(this.state.keyword && this.state.numRetrieve)}
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
            <Results results={this.state.articles}/>
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
