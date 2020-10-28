import React from 'react'
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
        https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.YtZHNxAb2_dJIBQGYjCCAQHaCp%26pid%3DApi&f=1"          
        alt=""
         />
         </div >
         <div className ="Table__row">
          <div>
           <h1>Hello</h1>
          </div>
         <div>
           <h1>hiiii</h1>
         </div>
         <div>
           <h1>bye</h1>
         </div>

       </div>
       </div>
       
    )
}

export default Home
