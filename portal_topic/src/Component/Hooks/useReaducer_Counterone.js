import React,{useReducer} from 'react';
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
    function Counterone() {
const[count,dispatch]=useReducer(reducer1,intiatlstate4);
     return(

        <div>
            <div>count:{count}</div>
            <button  onClick={()=>dispatch('increment')}>Increment</button>
             <button onClick={()=>dispatch('decrement')}>Decrement</button>
              <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
  
}
export default Counterone