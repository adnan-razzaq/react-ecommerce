import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// strapi functions
import registerUser from "../strapi/registerUser";
import loginUser from "../strapi/loginUser";

export default function Login() {
  const history = useHistory();
  const [name, setname] = useState("default");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isMember, setisMember] = useState(true);

  let isEmpty = !email || !password || !name;

  // toggling from sign in to creat an account
  const toggleMember = () => {
    setisMember((prev) => {
      let isMember = !prev;
      isMember ? setname("default") : setname("");
      return isMember;
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    let response;
    if (isMember) {
      //response = await loginUser();
    } else {
      response = await registerUser({ email, password, name });
    }
    if (response) {
      console.log("success");
      console.log(response);
    } else {
      //show alert
    }
  };
  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "Sign in" : "Register"}</h2>
      <form className="login-form">
        {/* single input */}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        {/* end of single input */}
        {/* single input */}
        {!isMember && (
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
        )}
        {/* end of single input */}
        {/* single input */}
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        {/* end of single input */}
        {/* Empty form text */}
        {isEmpty && (
          <p className="form-empty">Please fill out all the fields</p>
        )}
        {/* submit Btn */}
        {!isEmpty && (
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handlesubmit}
          >
            Submit
          </button>
        )}
        {/* register link */}
        {/* doubt */}
        <p className="register-link">
          {isMember ? "need to register" : "already a member"}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
}
