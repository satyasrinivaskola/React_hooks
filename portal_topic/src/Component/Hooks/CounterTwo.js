import React,{useReducer} from 'react';
const intiatlstate4={
    first_counter:0,
    second_counter:5

}
const reducer1=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,first_counter:state.first_counter + 1};
            case 'increment33':
            return {...state,first_counter:state.first_counter + action.value};
        case 'decrement':
            return {...state,first_counter:state.first_counter - 1};
             case 'increment2':
            return {...state,second_counter:state.second_counter + 1};
        case 'decrement2':
            return {...state,second_counter:state.second_counter - 1};
        case 'reset':
            return intiatlstate4;
        default:
            return {first_counter:state.first_counter};
             return {second_counter:state.second_counter};
    }
}
    function CounterTwo() {
const[count,dispatch]=useReducer(reducer1,intiatlstate4);
     return(

        <div>
            <div>count:{count.first_counter}</div>
            <div>count:{count.second_counter}</div>
            <button  onClick={()=>dispatch({type:'increment'})}>Increment</button>
                <button  onClick={()=>dispatch({type:'increment33',value:3})}>Increment 3</button>


             <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
                <button  onClick={()=>dispatch({type:'increment2'})}>Increment2</button>
             <button onClick={()=>dispatch({type:'decrement2'})}>Decrement2</button>
              <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
  
}
export default CounterTwo