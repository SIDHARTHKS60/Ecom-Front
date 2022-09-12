import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:9090/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <br />
        </div>

        <h3>SIGN IN</h3>

        <div className="mb-3">
          <label>User Name : </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter UserName"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <br />

        <div className="mb-3">
          <label>Password : </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <br />
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </div>

        <p className="forgot-password text-right">
          <a href="/sign-up">Don't have an account? Sign Up</a>
        </p>
      </form>
    );
  }
}
