import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';

import './App.css'
import { Sidebar, Navbar } from './components';
import { useStateContext } from './contexts/ContextProvider';
import Ecommerce from './pages/Ecommerce';
import Orders from './pages/Orders';
import Employees from './pages/Empolyees';
import Customers from './pages/Customers';
import Calender from './pages/Calender';
import Kanban from './pages/Kanban';
import Editor from './pages/Editor';
import ColorPicker from './pages/ColorPicker';
import ThemeSetting from './components/ThemeSetting';

const App = () => {

  const { activeMenu, themeSettings,setThemeSettings,currentColor,currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray" style={{ background: currentColor, borderRadius: '50%' }} onClick={()=>setThemeSettings(true)}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ?
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white "><Sidebar /></div> : <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>}

          <div className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full "><Navbar /></div>


            <div>
              {themeSettings && <ThemeSetting />}
              <Routes>
                {/**dashboard */}

                <Route path="/" element={(<Ecommerce />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/**pages */}

                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />

                {/**apps */}
                <Route path='/calendar' element={<Calender />} />
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/color-picker' element={<ColorPicker />} />

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App