import React, {useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp (){
  
  const url = "http://localhost:9090/users/add";

  const [data, setData] = useState({ id: "", name: "", contactno: "",password:"" });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  } 
  
  const navigate=useNavigate()

  function submit(e) {
    //e.preventDefault();
    Axios.post(url, {
      id: data.id,
      name: data.name,
      contactno: data.contactno,
      password:data.password
    }).then((res) => {
      console.log(res.data);
    });
    
    navigate("/homepage")
      
  }
    
    return (
      <form onSubmit={(e) => submit(e)}>
        <h3>SIGN UP</h3>

        <div className="mb-3">
          <label>User ID  </label>
          <input
            type="text"
            id="id"
            value={data.id}
            onChange={(e) => handle(e)}
            className="form-control"
            placeholder=" User ID"
          />
        </div>
        <br />

        <div className="mb-3">
          <label>User Name  </label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => handle(e)}
            className="form-control"
            placeholder=" User name"
          />
        </div>
        <br />

        <div className="mb-3">
          <label>Contact No.  </label>
          <input
            type="text"
            id="contactno"
            value={data.contactno}
            onChange={(e) => handle(e)}
            className="form-control"
            placeholder=" Mobile no."
          />
        </div>
        <br />

        <div className="mb-3">
          <label>Password  </label>
          <input
            type="password"
            id="password"
            value={data.password}
            onChange={(e) => handle(e)}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <br />
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>

        {/* <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p> */}
      </form>
    );

}
export default SignUp;