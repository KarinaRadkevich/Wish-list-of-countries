import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
  const [place,setPlace] = useState(0);
  const {id, title, image} = data[place];

  const deletePlace = (id) => {
    let newPlaces = place.filter(item => item.id !== id);
    setPlace(newPlaces);
      }

  const back = () => {
    setPlace(place => {
      place --;
      if (place<0) {
        place = data.length-1;
      }
      return place;
    })
  }

  const next = () => {
    setPlace(place => {
      place ++;
      if(place>data.length-1) {
        place=0;
      }
      return place;
    })
  }
 

  return(
    <div>
      <div className='container'>
        <h1>TOP countries, which I want to visit:</h1>
      </div>
      <div className='container'>
        <img src={image} width="550px" height="370px" alt="picture"/>
      </div>
      <div className='container'>
        <h2>{id} - {title}</h2>
      </div>
      <div className='container'>
        <button className='color' onClick={()=> deletePlace(id)}>Done!</button>
      </div>
      <div className='container btn'>
        <button onClick={back}>Back</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  )
}

export default App;
