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
    function CounterThree() {
const[count,dispatch]=useReducer(reducer1,intiatlstate4);
const[countTwo,dispatch1]=useReducer(reducer1,intiatlstate4);

     return(

        <div>
            <div>count:{count}</div>
            <button  onClick={()=>dispatch('increment')}>Increment</button>
             <button onClick={()=>dispatch('decrement')}>Decrement</button>
              <button onClick={()=>dispatch('reset')}>Reset</button>
       
            <div>count:{countTwo}</div>
            <button  onClick={()=>dispatch1('increment')}>Increment_mul_red</button>
             <button onClick={()=>dispatch1('decrement')}>Decrement_mul_red</button>
              <button onClick={()=>dispatch1('reset')}>Reset_mul_red</button>
        </div>
    )
  
}
export default CounterThree