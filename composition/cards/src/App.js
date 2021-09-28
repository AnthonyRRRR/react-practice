import React from 'react';
import Card from './components/Card/Card';

const src = "https://miro.medium.com/max/2400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg";

function App() {
  return (
    <div>
      <Card src={src}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </Card>
      <Card>
        <div className="card-body">
          <h5 className="card-title">Special title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </Card>
    </div>
  );
}

export default App;
