import React, {Component} from 'react';
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import {connect} from 'react-redux';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';


class App extends Component {

  componentDidMount() {
    this.getBookList();
  }

  getBookList = () => {
    this.props.dispatch({type: 'FETCH_BOOK_LIST'})
  }

  render() {
    return (
        <div className="App">
          <Router>
            <header className="Header">
              <h1>Books</h1>
              <nav className="Nav">
                <Link className="Nav-Link" to="/">Home</Link>
                <Link className="Nav-Link" to="/add">Add Book</Link>
              </nav>
            </header>

            <main className="Main">
              <Switch>
                <Route path="/" exact component={BookList} />
                <Route path="/add" component={BookForm} />
              </Switch>
            </main>
          </Router>
        </div>
    );
  }
}

export default connect()(App);
