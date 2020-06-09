import React, { Component } from "react";
import "./Home.css";
import { Redirect } from "react-router-dom";
import image from "./img.jpg";
class Home extends Component {
  constructor() {
    super();
    let isLogin = false;
    this.state = {
      login: false,
      Email: "",
      Password: "",
      isLogin,
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  login() {
    let login = this.state.login;
    if (login === false) {
      document.getElementById("login").style.display = "flex";
      this.setState({
        login: true,
      });
    } else {
      document.getElementById("login").style.display = "none";
      this.setState({
        login: false,
      });
    }
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  formSubmit(event) {
    event.preventDefault();
    const { Email, Password } = this.state;
    if (Email === "admin" && Password === "1234") {
      this.setState({
        isLogin: true,
      });
      localStorage.setItem("username", Email);
    }
  }
  render() {
    var login = this.state.login;
    let className;
    if (login) {
      className = "active";
    } else {
      className = "main-header";
    }
    if (this.state.isLogin) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="outerContainer">
        <div className="innerConatiner">
          <div className="Header-panel">
            <header>
              <div className="header">Welcome to Edunomics</div>
              <div>
                <button className="btn-header" onClick={this.login}>
                  Log in
                </button>
                <a href="/signup">
                  <button className="btn-header">Signup</button>
                </a>
              </div>
            </header>
          </div>
          <div className="main">
            <div className="login" id="login">
              <form onSubmit={this.formSubmit}>
                <p>Email/Phone Number</p>
                <input
                  name="Email"
                  placeholder="Email/Name"
                  value={this.state.Email}
                  type="text"
                  required
                  onChange={this.onChange}
                ></input>
                <p>Password</p>
                <input
                  name="Password"
                  placeholder="Password"
                  type="password"
                  value={this.state.Password}
                  onChange={this.onChange}
                  required
                ></input>
                <button type="submit">Login</button>
              </form>
            </div>
            <div className={className}>
              <h1>where do you want to go today </h1>
              <p>Share yours ultimate travel bucket list with us</p>
            </div>
          </div>
        </div>
        <div class="content">
          <div>
            <h3>Whatever your style,travel your way</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <img src={image} alt="travel-img"></img>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
        <div className="footer">
          <p>EDUNOMICS</p>
          <p>contact@edunomics.com</p>
        </div>
      </div>
    );
  }
}
export default Home;
