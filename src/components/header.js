import React from 'react';
import '../App.css'

const Header = (props)=>{
  return (
    <div>
     <div className="navBar">
     <span class="material-symbols-outlined"> menu
      </span>
      <h3>{props.logo}</h3>
     <p> <a className="signIn" href="">Sign in</a> </p>
     <span class="material-symbols-outlined">
                  person
        </span>
      <span class="material-symbols-outlined">
            shopping_cart
        </span> 
    </div>
    <div className="searchBar">
     <input type="text" />
     <button><span class="material-symbols-outlined">
                  search
          </span>
      </button>
    </div>
  </div>
    )
};

export default Header;

