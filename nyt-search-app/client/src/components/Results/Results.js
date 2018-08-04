import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
// import Article from "../Article";
import "./Results.css";
import API from "../../utils/API";



const Results = props => (
  <Jumbotron className="col-sm-12 col-md-8">
    <h1>
      Search Results
    </h1>

    {props.results.length ? (
      <ListGroup>
        {props.results.map((result, index) => (
          <ListGroupItem key={result._id} id={index}>
            <div className="articleLabel">{index}</div>
    		    <div className="articleHeader">
    		      <a href={result.web_url} target="_blank"><div className="articleHeadline">{result.headline.main}</div></a>
    		      <div className="articleAuthor">{result.byline.original}</div>
    		    </div>
    		    <Button color="success" className="clearfix">Save Article</Button>
    	      {/*<Button color="primary" onClick={() => this.saveArticle({result._id})}>Save Article</Button>*/}
          </ListGroupItem>
        ))}
      </ListGroup>
    ) : (
      <h3>No Results to Display</h3>
    )}
	</Jumbotron>
);


export default Results;
