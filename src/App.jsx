import React, { useState } from "react";
import people from './data'
import { FaChevronCircleLeft,FaChevronCircleRight,FaQuoteRight} from "react-icons/fa";
const App = () => {
  const[index,setIndex]=useState(0);
  const{name,job,image,text}=people[index];
 
  // click event functions
  
  const nextPerson=()=>{
    setIndex((currentIndex)=>(currentIndex+1)%people.length);
  };
  const prevPerson=()=>{setIndex((index)=>(((index-1)+people.length)%people.length))};

  const randPerson=()=>{
    let newIndex=Math.floor(Math.random()*people.length);
    if(index===newIndex)
      newIndex=index+1;
    console.log(newIndex);
    setIndex(newIndex);
  }
  // output window
  return (
    <main>
      <article className="review">
        <div className="img-container"> 
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon"><FaQuoteRight/></span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button type="submit" className="prev-btn" onClick={prevPerson}><FaChevronCircleLeft/></button>
          <button  className="next-btn" onClick={nextPerson}><FaChevronCircleRight/></button>
        </div>
        <button className="btn btn-hipster" onClick={randPerson}>Shuffle</button>
      </article>
    </main>
  );
};
export default App;
