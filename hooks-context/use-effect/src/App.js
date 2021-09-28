import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [list, setList] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${ process.env.REACT_APP_LIST_URL }/users.json `)
      .then(res => res.json())
      .then(list => {
        setIsLoaded(true);
        setList(list)
      }, (error) => {
        setIsLoaded(true);
        setError(error);
      })
  }, []);

  const getInfo = (user) => {
    const info = {
      id: user.id,
      name: user.name
    };

    setUser(info)
  };


  if (error) {
    return <div>Ошибка: { error.message }</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="App-container">
        <List list={ list } getInfo={ getInfo }/>
        {user !== null && <Details info={ user }/>}
      </div>
    );
  }
}

export default App;
