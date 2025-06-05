import React,{useContext} from 'react'
import Theme from './Use_context_Theme'
import {Themecontext} from './Use_context_Theme'
const Consumer_context=()=>{
    const {theme}=useContext(Themecontext)
    return(
         
        <div>
            
            <h1>Consumer context: {theme}</h1>
           

          
        </div>
    )
}
export default Consumer_context