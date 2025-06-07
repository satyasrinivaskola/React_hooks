import React,{ useEffect ,useState} from 'react';
const Useeffect_topic=()=>{
const [count,setCount]=useState(0)
const[name,setName]=useState(0)
console.log("without use effect and print every render and not depending on dependency array")
useEffect(()=> {
console.log("use effect is called based on count value")
alert(count)
})
return(
    <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> 

    <button onClick={()=>setCount(count+1)}>Click count{count}</button>
    <button onClick={()=>setCount(count+2)}>Click ccc{count}</button>
    
    </div>
)
    
}
export default Useeffect_topic