import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';
	
class App extends Component {
  // state = {hits: []}

  // componentDidMount() {
  // 	fetch(API + DEFAULT_QUERY)
  // 	      .then(response => response.json())
  // 	      .then(data => this.setState({ hits: data.hits }));

  // }

  render() {
  	return (
	  	<Router>
  	    <div>
  	      <Switch>
  	        <Route exact path="/" component={Home} />
  	        {/*<Route exact path="/search" component={Books} />
  	        <Route exact path="/results" component={Books} />
  	        <Route exact path="/saved" component={Books} />
  	        <Route exact path="/saved/:id" component={Detail} />*/}
  	        <Route component={NoMatch} />
  	      </Switch>
  	    </div>
  	  </Router>
  	)
  }
}

export default App;
