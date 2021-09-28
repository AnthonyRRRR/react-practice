import React, { useState } from 'react'
import PostsContext from '../context/PostsContext';
import { useHistory } from 'react-router-dom';

export default function PostsProvider(props) {
  const [input, setInput] = useState({ content: '' });
  let history = useHistory();

  const onChange = (event) => {
    setInput(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  };

  const sendPostApi = (newPost) => {
    fetch(process.env.REACT_APP_POSTS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    })
      .then((response) => console.log(response))
  };

  const deletePostApi = (id) => {
    fetch(`${ process.env.REACT_APP_POSTS_URL }/${ id }`, {
      method: 'DELETE',
    }).then(res => res.text())
      .then(res => console.log(res));

    history.push('/')
  };

  return (
    <PostsContext.Provider value={{input, setInput, onChange, sendPostApi, deletePostApi}}>
      {props.children}
    </PostsContext.Provider>
  )
}