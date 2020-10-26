import React from 'react'
import { Link } from "react-router-dom";
import Firstpage_logo from './First_logo.css'

function First_logo() {
    return (
        <div  className="First__logo"> 
            <Link to="/Home" >
               <img className="logo"
                    src={'/pf.jpeg'}
                    alt=""
               />
            </Link>
            
        </div>
    )
}

export default First_logo
