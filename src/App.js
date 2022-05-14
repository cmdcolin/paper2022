import React from 'react'
import './style.css'
import icon from './icon.ico'

function App() {
  return (
    <div>
      <span className="topSpan">
        <h2 className="jbrowseHeader">JBrowse 2 paper demos</h2>
        <img alt="logo" src={icon} className="icon" align="right" />
      </span>
      <hr />
      <Readme />

      <div id="parentDiv">
        <div className="post">
          <a href="#1" name="1">
            <h1>1 - Linear synteny demo</h1>
          </a>
          <img src="1.png" />

          <a
            className="demo"
            href="https://jbrowse.org/code/jb2/v1.7.6/?config=test_data%2Fconfig_synteny_grape_peach.json&session=share-tutKGJuSZD&password=T1AUu"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a href="#2" name="2">
            <h1>2 - Zoom in on gene duplication - linear synteny demo</h1>
          </a>
          <img src="2.png" />

          <a
            className="demo"
            href="http://jbrowse.org/code/jb2/v1.7.6/?config=test_data%2Fconfig_synteny_grape_peach.json&session=share-ZitPAY2MTT&password=Z5EIy"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a href="#3" name="3">
            <h1>3 - MSAView</h1>
          </a>
          <img src="3.png" />

          <a
            className="demo"
            href="http://jbrowse.org/code/jb2/v1.7.6/?session=share-yGChKteEq4&password=c4cPj"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a href="#4" name="4">
            <h1>4 - Whole genome overview - Cancer CNVs</h1>
          </a>
          <img src="4.png" />
          <p>Test</p>
          <a
            className="demo"
            href="http://jbrowse.org/code/jb2/v1.7.6/?config=test_data%2Fconfig_demo.json&session=share-u9LvapW6v_&password=SvOBM"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a href="#5" name="5">
            <h1>5 - Breakpoint split view</h1>
          </a>
          <img src="5.png" />

          <a
            className="demo"
            href="http://jbrowse.org/code/jb2/v1.7.6/?config=test_data%2Fconfig_demo.json&session=share-5kkYZcwxZ9&password=0ZhPu"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a href="#6" name="6">
            <h1>6 - SV inspector</h1>
          </a>
          <img src="6.png" />

          <a
            className="demo"
            href="http://jbrowse.org/code/jb2/v1.7.6/?config=test_data%2Fconfig_demo.json&session=share-VIXsgYhQUG&password=IQWzQ"
          >
            Demo
          </a>
        </div>
        <div className="post">
          <a href="#7" name="7">
            <h1>7 - Read vs reference</h1>
          </a>
          <img src="7.png" />

          <a
            className="demo"
            href="http://jbrowse.org/code/jb2/v1.7.6/?config=test_data%2Fconfig_demo.json&session=share-lYJiAhQuZs&password=tIhDN"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  )
}
function Readme() {
  return (
    <div className="readme">
      <p>
        <i>
          These demos contain live links to demos that are demonstrated in our
          JBrowse 2 paper.
        </i>
      </p>
      <div>
        <a href="https://github.com/GMOD/jbrowse-components">Github</a>
        <br />
        <a href="https://gitter.im/GMOD/jbrowse">Gitter chat</a>
      </div>
    </div>
  )
}
export default App
