import React from "react";
import { ReactDOM } from "react";
function Nav (){

    let currentThing = 'World cup';
    return(
        <div>
            <form action="#">
                
                
                <input type="text" name="" id="" />
            
            
            </form>
            <nav>
                <ul>
                    <li> <a href="">For you</a> </li>
                    <li> <a href="">Trending</a></li>
                    <li> <a href="">{currentThing}</a></li>
                    <li> <a href="">News</a></li>
                    <li> <a href="">Sports</a> </li>
                    <li> <a href=""> Entertainment</a></li>
                </ul>  
            </nav>


        </div>
    )
}

export default Nav;