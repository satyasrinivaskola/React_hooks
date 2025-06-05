import React,{useState} from 'react'
function Usestate_topic ()
 {
    const[count,dount]=useState(0)
const increment=()=>{
    dount(count+1)
}
    return(
        <div>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        </div>
    )
}

export default Usestate_topic
