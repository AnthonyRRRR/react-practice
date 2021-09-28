import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NewPostForm from './components/NewPostForm';
import Post from './components/Post';
import PostsList from './components/PostsList';
import PostsProvider from './components/PostsProvider';

function App() {

  return (
    <PostsProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={ PostsList }/>
            <Route exact path="/posts/new" component={ NewPostForm }/>
            <Route exact path={ `/posts/:id` } component={ Post }/>
          </Switch>
        </div>
      </Router>
    </PostsProvider>
  );
}

export default App;
