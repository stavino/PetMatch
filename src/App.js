import './App.css';
import React, {useEffect, useState} from 'react';
import TitleFunction from './components/Title';
import MySavedPets from './components/MySavedPets'
import {Route, Routes} from 'react-router-dom';
import Comments from './components/Comments';
import CardsWhole from './components/CardsWhole';
import Header from './components/Header';


function App() {

const [FetchedPetInformation, setPetInformation] =useState({animals: []});
const [CardForSavedPets, setSavedPetCard] = useState([])
const [CommentsArray, setCommentsArray] =useState([])
  

    ;
    const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJyb0hRbFpiUU9iRUNzVVl3dFVHNXgzbWVDbjB2bGQySDBiTFNPZnc5U3h5b3M3emJ5byIsImp0aSI6IjEzN2UwNGUyMmNmZTc5NjNhYjViNDU3ZjZhYzk2N2JkMDVkNTZhYWZkZTRhN2ZhMTY2NzJhYjdlMTg1MTAwZTM2OGI4NGJhNTM4YTY3ODk0IiwiaWF0IjoxNjM5MTEzODIxLCJuYmYiOjE2MzkxMTM4MjEsImV4cCI6MTYzOTExNzQyMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.iES7EF2_KeIfFRKFGshCCxbfbAcL88F5GRnbHtUQRHHVR4bm4GUsT0WWIft7qJ5yWdDejgMC5wIfS7ESWcW1OBvKuqaHrK8RFCsfmn2Z8boseg05uMKg3QPK0HzQMDx2P8Hfx8OCcaXTmvEYAEIGAk--mnvpMhVg-HGOtLmgFutUZzjVd3hl2GKVcD6p1oafGEFlmkXoLX4ILSxX48sdRQmsfHvsyVRK74u6qrDkW-B-9ZKLpYKg1xmiPDFHux5VK-fv9uhPgYx0fcd5sfezlWweEFzFO87Qtr_FACzkURDQZaUIXQsS60Td85-ZCwUq-RUBtGPWItcAEUuz7QnBWA"
    // const IntervalForNewToken = setInterval(() => console.log('hey'), [3600])
   
   
  
  
    const fetchFunction = function(){
     fetch('https://api.petfinder.com/v2/animals?limit=100', {headers: {
        Authorization: `Bearer ${accessToken}`
    }})
    .then(response => response.json())
    .then(rawData => setPetInformation(rawData), console.log(FetchedPetInformation))
    .then(FetchedPetInformation)
  
  
  }
  const fetchFunctionTestimonials = function(){
    fetch('http://localhost:3000/Testimonials')
    .then(response => response.json())
    .then(rawData => setCommentsArray(rawData))
 
 
 }
 useEffect(() => {fetchFunctionTestimonials()}, [])
    
    
    
    
    
    useEffect(() => {fetchFunction()}, [])


    const swipeRightFunction = function(item){
        setSavedPetCard([...CardForSavedPets, item])
    }

  return (
   
    <div className="App">
      <Header />
   <TitleFunction />
   
   <Routes>
      <Route path="/swipe" element={<CardsWhole swipeRightFunction={swipeRightFunction} FetchedPetInformation={FetchedPetInformation}/>}/>
     </Routes>
        
        
      
        
<Routes>
<Route path='/savedPets' element={<MySavedPets savedPets={CardForSavedPets}/>} />
</Routes>



  <Routes > 
    <Route path='/Testimonials' element={<div><div className='comments'>
    {CommentsArray.map(
  (eachComment) => {

    return (<Comments info={eachComment} key={eachComment.id}/>)


})}
</div>
<form type='submit' name='myform' defaultValue={'none'} onSubmit={(e) => {
  e.preventDefault();
  console.log(document.myform.commentsbox.value);
   fetch('http://localhost:3000/Testimonials',
  {
          method: 'POST', 
          headers: {'Content-Type': 'application/json'}, 
          body: JSON.stringify(
                {"comment": document.myform.commentsbox.value,
                  "name": document.myform.nameBox.value,
                  "id": Math.random() * 10
              })
        });
    document.myform.reset()
    window.location.reload(true)

}}>
<input type='text' name='commentsbox' placeholder='Type your review here...'  id="comments-box" ></input><br></br>
<input type='text' name='nameBox' placeholder='Name'></input><br></br>
<input value='Submit' type="submit" ></input>
</form>
</div> } />
</Routes> 
    </div>
  );
}

export default App;
