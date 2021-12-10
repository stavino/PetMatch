import {useState} from 'react'
import TinderCard from 'react-tinder-card';


const Card = function(props){







let photoArray = [];
let source = [];
let index = 0;



if(props.animalInfo.photos.length>0){
    props.animalInfo.photos.map(
    (eachPhoto)=> {

    
    photoArray.push(eachPhoto);
    source = photoArray[index]['large'];
    // console.log(photoArray[index]);

})}

let setPicIndexNext = function(){
    if(index< photoArray.length){
       index =(index + 1);
       source = photoArray[index]['small']
    }
    if(index >= photoArray.length){
        index = 0;
    }
}
const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
    if(direction==='right'){
      props.swipeRight(props.animalInfo)
    }
  }
  
  const onCardLeftScreen = () => {
    console.log(' left the screen')
  }
  

return (
    
    <TinderCard className='card' onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} >
        
<h1 className='name'>Name: {props.animalInfo.name}</h1>




    
    
          <div className='image-container'>
    <img src={source} alt='alt' className='card-image'/>
          </div>




<a className="prev" onClick={()=>{console.log('previous image')}}>◀︎</a>
  <a className="next" onClick={()=>{console.log('next image')}}>►</a>
  
<div className='text-area'>
<h2>Age: {props.animalInfo.age}</h2>
<p>Gender: {props.animalInfo.gender}</p>

<p>{props.animalInfo.description}</p>




</div>






</TinderCard>


)






}

export default Card;