import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class App extends Component {
  state = {hits: []}

  componentDidMount() {
  	fetch(API + DEFAULT_QUERY)
  	      .then(response => response.json())
  	      .then(data => this.setState({ hits: data.hits }));

    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
  }

  render() {
  	const { hits } = this.state;
    return (
    	<ul>
        {hits.map(hit =>
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        )}
      </ul>
    )
  }
}

export default App;

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/search" component={Books} />
        <Route exact path="/results" component={Books} />
        <Route exact path="/saved" component={Books} />
        <Route exact path="/saved/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
