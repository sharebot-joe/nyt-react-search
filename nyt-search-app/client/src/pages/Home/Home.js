import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Form, Input } from 'reactstrap';
import Results from "../../components/Results";
import Saved from "../../components/Saved";
import API from "../../utils/API";
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
	    keyword: "",
	    numRetrieve: 1,
	    startYear: "",
	    endYear: "",
	    results: [],
	    saved: []
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    this.buildQueryURL = this.buildQueryURL.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    // this.loadArticles();
  }

  loadSaved = () => {
    API.getSaved()
      .then(res =>
        this.setState({ saved: res.data })
      )
      .catch(err => console.log(err));
  };


  saveArticle = id => {
    API.saveArticle(id)
      .then(res => this.loadSaved())
      .catch(err => console.log(err));
  };


  handleInputChange = (event) => {
  	const { name, value } = event.target;
  	// console.log(event.target.value)
  	this.setState({
  		[name]: value
  	}, function () {
  	    // console.log(this.state.keyword);
  	    // console.log(this.state.numRetrieve);
  	    // console.log(this.state.startYear);
  	    // console.log(this.state.endYear);
  	    // console.log(this.state.results);
  	    // console.log(this.state.saved);
  	});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.state.keyword && this.state.numRetrieve) {
    	let query = this.buildQueryURL(this.state)
      API.getResults(query)
        .then(res => {
          if(!res.data.response.docs.length) {
            console.log("No results found! Please try again!")
            return
          }
          this.setState({
          	results: res.data.response.docs
          }, function () {
            // console.log(this.state.results)
          });
        })
        .catch(function (error) {
          // console.log("error", error)
          console.log("Error! ", error.message)
          // console.log("Error! ", error.config)
          // console.log("Error! ", error.request)
          // console.log("Error status: ", error.request.status)
          console.log("Please try your search again.")
        });
    }
  };

  handleBtnClick = event => {
  	console.log("button clicked!")
    // Get the data-value of the clicked button
    // const btnType = event.target.attributes.getNamedItem("data-value").value;
    // // Clone this.state to the newState object
    // // We'll modify this object and use it to set our component's state
    // const newState = { ...this.state };

    // if (btnType === "pick") {
    //   // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
    //   newState.match = 1 === Math.floor(Math.random() * 5) + 1;

    //   // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
    //   newState.matchCount = newState.match
    //     ? newState.matchCount + 1
    //     : newState.matchCount;
    // } else {
    //   // If we thumbs down'ed the dog, we haven't matched with it
    //   newState.match = false;
    // }
    // // Replace our component's state with newState, load the next dog image
    // this.setState(newState);
    // this.loadNextDog();
  };


  buildQueryURL(state) {
    // queryURL is the url we'll use to query the API
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    // add the api key parameter (the one we received when we registered)
    queryURL += "?api-key=2b71d83747f1470da673042478881bdc";

    // grab text the user typed into the search input, add as parameter to url
    var searchTerm = this.state.keyword
    queryURL += "&q=" + searchTerm;

    // if the user provides a startYear, include it in the queryURL
    if(this.state.startYear){
      var startYear = this.state.startYear
      queryURL += "&begin_date=" + startYear + "0101";
    }

    // if the user provides an endYear, include it in the queryURL
    if(this.state.endYear){
      var endYear = this.state.endYear
      queryURL += "&end_date=" + endYear + "0101";
    }

    // Logging the URL so we have access to it for troubleshooting
    // console.log("---------------\nURL: " + queryURL + "\n---------------");

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
            <Form>
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
            </Form>
          </Col>
        </Row>
        <Results startIndex={0} endIndex={this.state.numRetrieve} data={this.state.results} handleBtnClick={this.handleBtnClick}/>
        <Saved data={this.state.saved} handleBtnClick={this.handleBtnClick}/>
      </Container>
    );
  }
}

export default Home;
