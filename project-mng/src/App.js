import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';


import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Register from './components/register';
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Route exact path="/" component={Home} />
          <div className="containter">
            <Route path="/todos/" exact component={TodosList} />
            <Route path="/todos/edit/:id" component={EditTodo} />
            <Route path="/todos/create" component={CreateTodo} />
            <Route path="/register" component={Register} />
            <Route path='/login' component={Login}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
