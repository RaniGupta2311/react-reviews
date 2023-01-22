import people from "./data.js";
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from "react-icons/fa";
import { useState } from "react";
const Review=()=>{
    const [index,setIndex]=useState(0);
    // console.log(people[0]);
    const {name,job,image,info}=people[index];
    const checkNumber=(n)=>{
        if(n>people.length-1)
            return 0;
        if(n<0)
        return people.length-1;
        return n;
    }
    const nextPerson=()=>{
        setIndex((index)=>{
            let newInd=index+1
            return checkNumber(newInd);
        });
       
    }
    const prevPerson=()=>{
        setIndex((index)=>{
            let newInd=index-1
            return checkNumber(newInd);
        });
       
    }
    const randomPerson=()=>{
        let ran=Math.floor(Math.random()*people.length);
        if(ran===index)
        ran=ran+1;
        setIndex(checkNumber(ran))
        }
       
    

    return(
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
                <span className="quote-icon"><FaQuoteRight/></span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{info}</p>
            <div class="button-container">
                <button className="prev-btn" onClick={prevPerson}><FaChevronLeft/></button>
                <button className="next-btn" onClick={nextPerson}><FaChevronRight/></button>
            </div>
            <button className="random-btn" onClick={randomPerson}>surprise me</button>
        </article>
    )
}
export default Review;