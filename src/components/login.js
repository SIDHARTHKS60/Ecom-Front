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
      <div>
        <form
          onSubmit={this.handleSubmit}
          style={{
            width: "800px",
            margin: "0 auto",
            font: "Arial",
            padding: "30px",
          }}
        >
          {/* <div>
            <br />
          </div> */}

          <h3 style={{}}>LOG IN</h3>

          <div >
            <label>USERNAME </label>
            <input
              type="text"
              placeholder="Enter UserName"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <br />

          <div>
            <label>PASSWORD </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <br />
          <button type="submit" className="button-container" style={{}}>
            SUBMIT
          </button>

          <p>
            <a href="/sign-up">Don't have an account? Sign Up</a>
          </p>
        </form>
      </div>
    );
  }
}
