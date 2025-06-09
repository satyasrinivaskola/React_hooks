import './App.css';
import Portaldemo from './Portal';
import ErrorBoundary1 from './ErroBoundary_concept'
import ErrorBoundary from './ErrorBoundary_wrap'
import Usestate_topic from './Component/Hooks/Usestate_topic'
import Theme from './Component/Use_context_Theme'
import Useeffect_topic from './Component/Hooks/UseEffect.js'
import MouseContainer from './Component/Hooks/MouseContainer.js'
import Counterone from './Component/Hooks/useReaducer_Counterone.js'

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
      <Counterone/>
     </>
   
    </div>

  );
}

export default App;
