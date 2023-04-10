import "./App.css";
import React, { useState } from "react";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(true);
  };
  
  const closeNav = () => {
    setNavOpen(false);
  };
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <div
        id="mySidenav"
        className="sidenav"
        style={{ height: navOpen ? "100%" : "0" }}
      >
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <h1>Logo</h1>

        <button class="button button2">
          <b>Testing</b>
        </button>

        <h6 className="h6c">
          <u>Test</u>{" "}
        </h6>

        <div className="mainflex">
          <div className="flex1">
            <div className="nav">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
              <a href="#">Test 5</a>
              <a href="#">Test 6</a>
              <a href="#">Test 7</a>
              <a href="#">Test 8</a>
              <a href="#">Test 9</a>
              <a href="#">Test 10</a>
            </div>
          </div>
          <div className="flex2">
            <div className="parent">
              <div className="first-one child">
                <h3>Test</h3>
                <h5>Test</h5>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet bla bla bla whatever just filling
                  space.
                </p>
                <br />
                <hr />
              </div>
              <div className="child">
                <h3>Test</h3>
                <h5>Test</h5>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet bla bla bla whatever just filling
                  space.
                </p>
                <br />
                <hr />
              </div>
              <div className="child">
                <h3>Test</h3>
                <h5>Test</h5>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet bla bla bla whatever just filling
                  space.
                </p>
                <br /> <hr />
              </div>
            </div>
          </div>
        </div>

        <h6 className="subH">
          <u>Test</u>{" "}
        </h6>
        <div className="container">
          <div className="image" style={{marginTop: '30px'}}>
            <img
              src="https://i.postimg.cc/s2tJVnJH/Screenshot-2023-04-02-235919.png"
              alt="Image 1"
            />
          </div>
          <div className="text" style={{marginLeft: '20px' }}>
            <h2>Heading</h2>
            <p>
              Our platforms are used quickly implement solutions to the hardest
              problems they face.
            </p>
            <span>
              <button className="x">Artificial inteligance</button>
            </span>
            &nbsp;&nbsp;&nbsp;
            <span>
              <button className="x">vision</button>
            </span>
          </div>

          <div className="image" style={{marginTop: '30px' }}>
            <img
              src="https://i.postimg.cc/s2tJVnJH/Screenshot-2023-04-02-235919.png"
              alt="Image 2"
            />
          </div>
          <div className="text">
            <h2>Heading</h2>
            <p>
              Fusce auctor mi sit amet risus porttitor, non volutpat sem
              bibendum.
            </p>
            <span>
              <button className="x">Artificial inteligance</button>
            </span>
            &nbsp;&nbsp;&nbsp;
            <span>
              <button className="x">vision</button>
            </span>
          </div>
        </div>
      </div>


      <span onClick={openNav}>
        <img
          className="h6"
          src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/h6-alt-512.png"
          width="40px"
          style={{ paddingTop: "40px", paddingLeft: "1400px" }}
        />
      </span>
    </div>
  );
}

export default App;
