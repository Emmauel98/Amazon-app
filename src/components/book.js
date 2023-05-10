import React from 'react';
import '../App.css'

const Book = (props)=>{
  const {img,title,author,number} = props;
  return(
   <div className="bookBox">
    <div className="book">
     <img src={img} alt="" />
    <div>
       <h3 className="bookTitle" style={{fontSize: "1rem"}}> {title}</h3>
       <h5> {author} </h5>
     </div>
     <p>{`#${number + 1 }`}</p>
     </div>
  </div>
    )
};

export default Book;