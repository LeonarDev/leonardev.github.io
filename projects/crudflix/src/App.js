import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

class App extends React.Component {
  mainHeader() {
    return (
      <header className="main-header">
        <Link to="/crudflix/" style={{ textDecoration: 'none' }}>
          <h1 className="main-title">CRUDflix</h1>
        </Link>
      </header>
    );
  }

  routes() {
    return (
      <Switch>
        <Route exact path="/crudflix/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route component={ NotFound } />
      </Switch>
    );
  }

  render() {
    return (
      <>
        <BrowserRouter>
          {this.mainHeader()}
          {this.routes()}
        </BrowserRouter>
      </>
    );
  }
}

export default App;
