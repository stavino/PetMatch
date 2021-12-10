import Card from "./Card";
import TinderCard from 'react-tinder-card';
const CardsWhole = function(props){





return (

<div className='cards'>
        
      
      

        {props.FetchedPetInformation.animals.map(
          
          (eachAnimal) => {
            // console.log(eachAnimal)
        
            if(eachAnimal.photos.length > 1)return (
            
            <Card  swipeRight={props.swipeRightFunction} className='swipe' animalInfo={eachAnimal} key={eachAnimal.id}/>
         
            
            
            )}
        
            
        )} 
        
        </div>





)

}

export default CardsWhole;