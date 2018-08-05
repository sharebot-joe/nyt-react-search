import React, { Component } from "react";
import { Button } from 'reactstrap';
// import { Link } from "react-router-dom";
// import { Jumbotron, Button, Container, Row, Col, Form, Input } from 'reactstrap';
// import API from "../../utils/API";

class Article extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    {/*API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));*/}
  }
  saveArticle = id => {
  	console.log('article saved!')
    // Filter props.results for article with an id not equal to the id being removed
    // const article = this.state.friends.filter(friend => friend.id !== id);
    // // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
  };

  render(props) {
    return (
    	<div>
	      <h3 className="articleHeadline">
		      <span className="label label-primary">{props.results.article._id}</span>
		      <strong>{props.results.article.name}</strong>
		    </h3>
		    <h5>By {props.results.article.author}</h5>
	      <Button color="primary" onClick={() => this.saveArticle(article._id}) >Save Article</Button>
	    </div>
    );
  }
}

export default Results;
