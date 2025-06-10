import React,{useReducer,useContext} from 'react';
import {CountContext} from './useReducer_top_com';
import Top_component from './useReducer_top_com';

function ComponentA() {
    const countContext = useContext(CountContext);
return(
    <div>
        <div>count444:{countContext.countState}</div>
         <button  onClick={()=>countContext.countDispatch('increment')}>IncrementA</button>
             <button onClick={()=>countContext.countDispatch('decrement')}>DecrementA</button>
              <button onClick={()=>countContext.countDispatch('reset')}>ResetA</button>
</div>
)
}
export default ComponentA