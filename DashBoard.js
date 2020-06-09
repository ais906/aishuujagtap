import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import "./DashBoard.css";
class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      menu: "",
      header: "Welcome to Edunomics",
    };
  }
  display = () => {
    if (this.state.menu === "Download") {
      return (
        <div className="main-dashboard">
          <div className="Download">Download Previous Year Questions Paper</div>
        </div>
      );
    }
    if (this.state.menu === "Sessions") {
      return (
        <div className="main-dashboard">
          <div className="Download"></div>
        </div>
      );
    }
    if (this.state.menu === "Settings") {
      return (
        <div className="main-dashboard">
          <div className="Download">Settings</div>
        </div>
      );
    }
    return (
      <div className="main-dashboard">
        <div className="front-page">
          <button>All Interactive Sessions</button>
          <button>Pratice Question</button>
          <br></br>
          <button>Downloads</button>
          <button>Ask Question</button>
        </div>
      </div>
    );
  };
  session = () => {
    if (this.state.menu === "Sessions") {
      return (
        <div>
          Session
          <select>
            <option>11 th </option>
            <option>12 th</option>
          </select>
        </div>
      );
    } else {
      return null;
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="outerContainer">
        <header className="header-dash">
          <div className="header-dash-name">
            <h3>{this.state.header}</h3>
          </div>
          <div>{this.session()}</div>
          <div className="account">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="">My Accont</Dropdown.Item>
                <Dropdown.Item href="/"> Loggout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </header>
        <div className="Menubar">
          <ul>
            <li>
              <button
                onClick={() => {
                  this.setState({
                    menu: "Home",
                    header: "Welcome to Edunomics",
                  });
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.setState({
                    menu: "Sessions",
                    header: "Home/sessions",
                  });
                }}
              >
                Sessions
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.setState({
                    menu: "Download",
                    header: "Home/downloads",
                  });
                }}
              >
                Downloads
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.setState({
                    menu: "Settings",
                    header: "Home/settings",
                  });
                }}
              >
                Settings
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  this.setState({
                    menu: "About",
                    header: "Home/about",
                  });
                }}
              >
                About
              </button>
            </li>
          </ul>
        </div>
        <div>{this.display()}</div>
        <div className="Activity">
          <div className="topicwise">
            <div className="activities-border">
              <p>Topic Covered</p>
              <hr></hr>
            </div>
            <div className="activities-border">
              <p> Activity</p>
              <hr></hr>
            </div>
            <div className="activities-border">
              <p>Performance</p>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DashBoard;
