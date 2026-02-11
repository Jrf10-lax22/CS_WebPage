import { useState } from 'react'
import './App.css'

import Home from './components/Home'
import Project from './components/Projects'
import Classes from './components/Classes'
import Events from './components/Events'
import Staff from './components/Staff'
import About from './components/Info'

function App() {
  const [section, setSection] = useState(<Home />)

  return (
    <>
      <div className="main">
        <div className="main2">

          {/* ================= HEADER ================= */}
          <header className="header">

            {/* Top thin bar */}
            <div className="headerTop">
              <div className="topLinks">
                <a href="#">SCHOOLS</a>
                <a href="#">LIBRARIES</a>
                <a href="#">RESOURCES</a>
              </div>

              <div className="searchWrap">
                <input className="searchInput" placeholder="Search" />
                <button className="searchBtn">🔍</button>
              </div>
            </div>

            {/* Main header row */}
            <div className="headerMain">

              {/* Left: logo + school name */}
              <div className="headerLeft">
                <img
                  className="logo"
                  src="/images.png"
                  alt="Alfred University Logo"
                />

                <div className="schoolText">
                  <div className="schoolName">ALFRED UNIVERSITY</div>
                  <div className="schoolSub">
                    COLLEGE OF ARTS AND SCIENCES
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="divider"></div>

              {/* Right: department */}
              <div className="headerRight">
                <div className="deptSmall">Department of</div>
                <div className="deptBig">Computer Science</div>
              </div>

            </div>
          </header>
          {/* =============== END HEADER =============== */}

          {/* NAV BUTTONS */}
          <div className="main_button">
            <button className="boton" onClick={() => setSection(<Home />)}>
              Home
            </button>
            <button className="boton" onClick={() => setSection(<About />)}>
              About
            </button>
            <button className="boton" onClick={() => setSection(<Staff />)}>
              Staff
            </button>
            <button className="boton" onClick={() => setSection(<Classes />)}>
              Classes
            </button>
            <button className="boton" onClick={() => setSection(<Events />)}>
              Events
            </button>
            <button className="boton" onClick={() => setSection(<Project />)}>
              Projects
            </button>
          </div>

          {/* CONTENT */}
          <div className="content">
            {section}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
