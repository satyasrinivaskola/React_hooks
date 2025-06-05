import React,{useState,useContext,createContext} from 'react'
import Consumer_context from './Use_context_consumer'
export const Themecontext=createContext()
const Theme = ()=>{

   const [theme,setTheme]=useState("light1")
   function Themechange()
    {

setTheme(theme==="light1"?"light":"dark3")
    //in if themecontext is light print light else print dark

    }
return(
    <Themecontext.Provider value={{theme,Themechange}}>
    <div>
       
    <h1>{theme}</h1>
    <button onClick={Themechange}>Theme</button>
      <Consumer_context/>
    </div>
   
</Themecontext.Provider>
   
)
}
export default Theme
//export  const Themecontext=createContext(Themecontext)
 
