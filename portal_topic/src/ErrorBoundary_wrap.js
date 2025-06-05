import React from 'react'
class ErrorBoundary extends React.Component {
    constructor(props){
        super(props)
        {
            this.state={
                haserror:false
            }

        }

    }
    static getDerivedStateFromError(error){
        return {haserror:true}
    }
   componentDidCatch(error,info)
   {
        console.log(error)   
    console.log(info)}
render()


{

        if(this.state.haserror){
            return
            <h1>Some thing wrong</h1>

        
    }
   return this.props.children
}


   


}
export default ErrorBoundary
