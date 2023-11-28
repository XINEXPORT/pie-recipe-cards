import pieData from './pieData.js'
import { useState } from 'react';

function PieCard(props){

const [showPicture, setShowPicture] = useState(true);
let {name, temp, ingredients, imgUrl, cardId} = props

function toggleCard(){
  setShowPicture(!showPicture);
}

if(showPicture){
  return (
    <div className="card" onClick={toggleCard}>
    <h2>{props.name}</h2>
    <img src={props.imgUrl}></img>
    </div>
  );} else{

  const ingredientsDisplay=[];
  for(let item in ingredients){
    ingredientsDisplay.push (<p> {item}: {ingredients[item]}</p>)
  }

  return(
    <div className="card" onClick={toggleCard} style={{background: '#ffd8db'}}>
    <h2>{props.name}</h2>
    <p>{props.temp}</p>
    {ingredientsDisplay}
    </div>
  )
}}

function App(){
  const cards = pieData.map(({name, temp, ingredients, imgUrl, cardId })=>
  <PieCard
  name = {name}
  temp = {temp}
  ingredients = {ingredients}
  imgUrl = {imgUrl}
  cardId = {cardId}
  key={cardId}
  />);
return<>{cards}</>
}

export default App;