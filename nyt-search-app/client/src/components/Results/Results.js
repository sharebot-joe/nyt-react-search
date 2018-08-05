import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
// import Article from "../Article";
import "./Results.css";
import API from "../../utils/API";



class Results extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data != nextProps.data;
  }

  render() {
		let {startIndex, endIndex, data} = this.props
	  console.log("props,", this.props)
	  let subset = data.slice(startIndex, endIndex)
	  console.log(endIndex)
	  console.log(this.props)
	  console.log(subset)

  	return (
		  <Jumbotron className="col-sm-12 col-md-8">
		    <h1>
		      Search Results
		    </h1>

		    {subset.length ? (
		      <ListGroup>
		        {subset.map((result, index) => {
		          return <ListGroupItem key={result._id} id={index}>
		            <div className="articleLabel">{index + 1}</div>
		    		    <div className="articleHeader">
		    		      <a href={result.web_url} target="_blank"><div className="articleHeadline">{result.headline.main}</div></a>
		    		      <div className="articleAuthor">{result.byline.original}</div>
		    		    </div>
		    		    <Button color="success" className="clearfix" onClick={this.props.handleBtnClick}>Save Article</Button>
		    	      {/*<Button color="primary" onClick={() => this.saveArticle({result._id})}>Save Article</Button>*/}
		          </ListGroupItem>
		        })}
		      </ListGroup>
		    ) : (
		      <h3>No Results to Display</h3>
		    )}
			</Jumbotron>
		)
  }
};


export default Results;
