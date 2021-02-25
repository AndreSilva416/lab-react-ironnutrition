import React from 'react';
import 'bulma/css/bulma.css';
// import foods from './foods.json';
import FoodBox from './components/FoodBox'
import Foods from './components/Foods';


function App() {
  return (
    <div>
      <Foods />
      <FoodBox />
    </div>
  );
}

export default App;
