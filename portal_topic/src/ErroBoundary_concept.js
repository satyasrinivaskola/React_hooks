import React from 'react'
function ErrorBoundary1({Heroname}) {

   if(Heroname==="Joker"){
    throw new Error("No condition passing correctly")
   }
        return(
            <div>{Heroname}</div>
        )
    
    
}
export default ErrorBoundary1;