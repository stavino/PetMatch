import SavedPetCard from './SavedPetCard'
import {useState, useEffect} from 'react'

const MySavedPets = function(props){





return (

<div id='saved-pet-container'>
<h1 className='myPets'>My Liked Pets</h1>
<div >
  {props.savedPets.map(
      
      (eachCard) => {
          if(eachCard.id > 1){

            return (<SavedPetCard animalInfo={eachCard} key={eachCard.id}/>)
          }
        
        })
          
          
          }




  
</div>





</div>




)}

export default MySavedPets;