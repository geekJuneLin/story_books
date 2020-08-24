import React from "react";
import { GoogleLogin } from "react-google-login";

const LoginPage = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div className="container p-4  d-flex justify-content-md-center align-items-center vh-100">
      <form className="bg-light p-5 text-left rounded-lg">
        <h1 className="display-4 pb-4 font-weight-bold">Story Books</h1>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <GoogleLogin
          clientId="903565677198-ed7ibuemf34sg64suqujtebb714s6vhg.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className="btn btn-outline-primary"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login With Google
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </form>
    </div>
  );
};

export default LoginPage;
