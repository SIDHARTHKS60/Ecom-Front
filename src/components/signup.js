import React, {useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function SignUp (){
  
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
      userId: data.id,
      userName: data.name,
      userContactno: data.contactno,
      userPassword:data.password
    }).then((res) => {
      console.log(res.data);
    });
    
    navigate("/Products")
      
  }
    
    return (
      <form
        onSubmit={(e) => submit(e)}
        style={{ width: "800px", margin: "0 auto", font: "Arial" ,border:"25px"}}
      >
        <h3>SIGN UP</h3>

        <div className="mb-3">
          <label>USER ID </label>
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
          <label>USER NAME </label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => handle(e)}
            className="form-control"
            placeholder=" User name"
            style={{ width: "20%" }}
          />
        </div>
        <br />

        <div className="mb-3">
          <label>CONTACT NO. </label>
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
          <label>PASSWORD </label>
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
            SIGN UP
          </button>
        </div>
      </form>
    );

}
