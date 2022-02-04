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
    const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJyb0hRbFpiUU9iRUNzVVl3dFVHNXgzbWVDbjB2bGQySDBiTFNPZnc5U3h5b3M3emJ5byIsImp0aSI6ImJiZDg2NDY0NzZkZjk5N2RiYTY3NGJmZmM5M2VjMGM5ODlkYjIzMTEzMjRlN2MxMWUwMDlkZGJiNmVjYTQxYjIyY2YyNzE5MTgzOThmNjg5IiwiaWF0IjoxNjM5MzI4MzgxLCJuYmYiOjE2MzkzMjgzODEsImV4cCI6MTYzOTMzMTk4MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.S3KYQDeBC_ckNYbd0lFPyBWp6ylMEx6-63HhmroJHghIPyw-jK07DN2rR3yV06c2x3p4WOeGtbTpBg-dO-u7pUOnN7hsWsOanvB9rOh_KdpF5V1ROwVRiowb4uqxweOty11tX4MEDsBMmXizKKa8H8mQaUnUcaUPAYtcktopfHq7kcZKF45hugII0XQSlOjU8DFAnL1rfaxUnQgT-vVNtvv7ENAuZeq8RpIiZwRRdHkgsg5GG7CCqVfRjH6_Va58vAqJEuAiuICoSfkT6vazwW3B2XaVT99FFRWz1fSHA0S8X9HjQsE0CxIDfjgwgzdGDmBVwnd5nMi-u-ngpjPK1A"
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
