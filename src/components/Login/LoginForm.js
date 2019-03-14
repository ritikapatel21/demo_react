import React from "react";
import { Field, reduxForm } from "redux-form";
//import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";





const required = value => (value ? undefined : "Required field.");
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(value)
    ? "Please enter valid email address"
    : undefined;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  const errorClass = touched && error ? "form-group has-error" : "form-group";
  return (
    <div className={errorClass}>
      <label className="control-label">{label}</label>{" "}
      <span className="required">*</span>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {touched &&
        ((error && <p className="help-block">{error}</p>) ||
          (warning && <p className="help-block">{warning}</p>))}
    </div>
  );
};

const LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <div>
      {/* <nav className="navbar-primary  navbar-absolute navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="nav-link navbar-brand" to="/">Crypto Currency</Link>
                    </div>
                </div>
            </nav> */}
      <div className="">
        <div
          className="full-page login-page"
          data-color="black"
          data-image="/static/media/full-screen-image-3.ef9c8d65.jpg"
        >
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="">
                  <form
                    className="login_wrapper"
                    id="loginForm"
                    method="post"
                    onSubmit={handleSubmit(props.onSubmit)}
                  >
                    
                    <div className="card">
                      <div className="header text-center">
                        <h4 className="title">Login</h4>
                        <p className="category" />
                      </div>
                      <div className="content">
                        <div>
                          <Field
                            name="username"
                            type="email"
                            component={renderField}
                            label="Email"
                            validate={[email, required]}
                          />
                          <Field
                            name="password"
                            type="password"
                            component={renderField}
                            label="Password"
                            validate={[required]}
                          />
                          <div className="footer text-center">
                            <div className="legend">
                              <button
                                type="submit"
                                className={`btn-fill btn-wd btn btn-info ${
                                  props.sessiondata.loggingIn ? "disabled" : ""
                                }`}
                              >
                                Submit
                                {props.sessiondata.loggingIn ? (
                                  <span className="btn-loader">
                                    {" "}
                                    {" "}
                                  </span>
                                ) : (
                                  ""
                                )}
                              </button>
                            </div>
                          </div>

                          {props.sessiondata.error ? (
                            <Alert bsStyle="danger">
                              {" "}
                              <span>{props.sessiondata.error}</span>
                            </Alert>
                          ) : (
                            ""
                          )}
                        </div>
                       <a
                          style={{
                            display: "block",
                            textAlign: "left",
                            marginTop: "10px"
                          }}
                          href="/registration"
                        >
                          Registration
                        </a>
                      </div>
                    </div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "loginForm" // a unique identifier for this form
})(LoginForm);
