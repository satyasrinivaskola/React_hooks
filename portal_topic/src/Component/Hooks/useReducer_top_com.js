import React,{useReducer} from 'react';
import ComponentA from './useReducer_compA';
const intiatlstate4=0
const reducer1=(state,action)=>{
    switch(action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return intiatlstate4;
        default:
            return state;
    }
}
export const CountContext=React.createContext()
function Top_component() {
const[count,dispatch]=useReducer(reducer1,intiatlstate4);
     return(
<CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    

           <ComponentA/>
       
          </CountContext.Provider>  
    )
  
}
export default Top_component