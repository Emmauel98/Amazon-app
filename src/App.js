import React from 'react';
import './App.css';
import books from './books.js';
import Book from './components/book.js';
import Header from './components/header.js';

function BookList(){
  return (
    <div>

      <Header logo="Amazon" />  
      
      
        {
          books.map((book,index)=>{
            return (
            <Book key= {book.id} {...book} number={index}></Book>
            );
          })
        }
        
      

    </div>
    
        );
};

export default BookList;