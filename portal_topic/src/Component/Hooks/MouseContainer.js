import React, { useState } from 'react'
import HookMouse from  './HookMouse_useEffect'

const MouseContainer=() =>{
	const [display, setDisplay] = useState(true)
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <HookMouse />}
		</div>
	)
}

export default MouseContainer
// This component toggles the display of the HookMouse component