const SavedPetCard = function(props){



console.log(props)


return (
<div className="saved-card">
<h1>{props.animalInfo.name}</h1>
 <div className='image-container'>
     <img src={props.animalInfo.photos[0]['small']} alt='savedPhoto' className="card-image"></img>
</div>




    


<a className="prev" onClick={()=>{console.log('previous image')}}>◀︎</a>
  <a className="next" onClick={()=>{console.log('next image')}}>►</a>
  
<div className='text-area'>
<h2>Age: {props.animalInfo.age}</h2>
<p>Gender: {props.animalInfo.gender}</p>

<p>{props.animalInfo.description}</p>







</div>
</div>
)
}

export default SavedPetCard;