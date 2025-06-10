import './App.css';
import Portaldemo from './Portal';
import ErrorBoundary1 from './ErroBoundary_concept'
import ErrorBoundary from './ErrorBoundary_wrap'
import Usestate_topic from './Component/Hooks/Usestate_topic'
import Theme from './Component/Use_context_Theme'
import Useeffect_topic from './Component/Hooks/UseEffect.js'
import MouseContainer from './Component/Hooks/MouseContainer.js'
import CounterTwo from './Component/Hooks/CounterTwo.js'
import CounterThree from './Component/Hooks/Multiple_useReducer.js'
import Top_component from './Component/Hooks/useReducer_top_com.js'
function App() {
  return (
    <div >
     { /* <h1>Portal </h1>*/}
    { /* <Portaldemo/>*/}
      <>
      <ErrorBoundary>
   
      <ErrorBoundary1 Heroname={"Chiru"}/>
      <ErrorBoundary1 Heroname={"Joker"}/>
     </ErrorBoundary>
      <ErrorBoundary1 Heroname={"satya"}/>
      <Usestate_topic/>
      <Theme/>
      <Useeffect_topic/>
      <MouseContainer/>
      <CounterTwo/>
      <CounterThree/>
      <Top_component/>
     </>
   
    </div>

  );
}

export default App;
