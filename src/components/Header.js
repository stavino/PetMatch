import { Link } from "react-router-dom";

const Header = function(){



return (<div className="App-header">
<Link to='/swipe' id='home'>Home</Link>
<Link to='/swipe' id='swipe'>Swipe</Link>
<Link to='savedPets'id='saved-pets-tag'>My Saved Pets</Link>
<Link to='Testimonials' id='test-tag'>Testimonials</Link>






</div>)}



export default Header;