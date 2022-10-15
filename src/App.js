import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GrSettingsOption } from 'react-icons/gr';

import './App.css'
const App = () => {
  return (
   <div>
    <BrowserRouter>
     <div className="flex relative dark:bg-main-dark-bg">
     <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
       <TooltipComponent content="Settings" position="Top">
        <button  className="text-3xl text-white p-3 hover:drop-shadow-xl  hover:rotate-45">
          <GrSettingsOption />
        </button>
       </TooltipComponent>
      </div>
     </div>
    </BrowserRouter>
   </div>
  )
}

export default App