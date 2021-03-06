import React from 'react'
import { Field, reduxForm } from 'redux-form'

const Registration = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
            <div>
                <label>Last Name</label>
                <div>
                    <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div>
                <label>Email</label>
                <div>
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                    />
                </div>
            </div>

            <div>
                <label>Password</label>
                <div>
                    <Field name="password"
                        component="input"
                        type="password"
                        placeholder="Password" />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>
                    Submit
        </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
        </button>
            </div>
            <a
                style={{
                    display: "block",
                    textAlign: "left",
                    marginTop: "10px"
                }}
                href="/"
            >
                Login
                        </a>
        </form>
    )
}

export default reduxForm({
    form: 'simple' // a unique identifier for this form
})(Registration)
