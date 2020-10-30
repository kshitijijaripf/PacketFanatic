import React from 'react'
import { Link } from "react-router-dom";
import  './Home.css'

function Home() {
    return (
      <div className="home">
        <nav className="navbar">
         <img 
          className="navbar__logo" 
         src={'/pf.jpeg'}
          alt=""
          />
        </nav>

         <div>
         <img 
        className="home__image"
        src="
        https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.hXFltbyPwlr4dQ358OL0hgHaC8%26pid%3DApi&f=1"          
        alt=""
         />
         </div >

         <div className ="Table__row">
          <div>
          <Link to='/Tablepage'>
            <img 
           className="Table1"
           src={'/table.png'}          
           alt=""
           />
           </Link> 
          </div>

         <div>
         <Link to='/Tablepage'>
            <img 
           className="Table1"
           src={'/table.png'}          
           alt=""
           />
           </Link> 
         </div>
         <div>
         <Link to='/Tablepage'>
            <img 
           className="Table1"
           src={'/table.png'}          
           alt=""
           />
           </Link> 
         </div>
         <div>
         <Link to='/Tablepage'>
            <img 
           className="Table1"
           src={'/table.png'}          
           alt=""
           />
           </Link> 
         </div>

        </div>
      </div>
       
    )
}

export default Home
