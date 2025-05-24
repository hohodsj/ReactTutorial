import { useState } from "react";

export default function Login() {
    // approach 1: use 2 states
    /*
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    function handleEmailChange(event) {
        setEnteredEmail(event.target.value);
        console.log("Email changed", event.target.value);
    }
    
    function handlePasswordChange(event) {
        setEnteredPassword(event.target.value);
        console.log("Password changed", event.target.value);
    }
   */

    // approach 2: use 1 state
    const [enteredValues, setEnteredValues] = useState({});
    function handleInputChange(identifier, event) {
        setEnteredValues((prevState) => ({
            ...prevState,
            [identifier]: event.target.value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={(event) => handleInputChange("email", event)}
                        value={enteredValues.email || ""}
                    />
                </div>

                <div className="control no-margin">
                    <label
                        htmlFor="password"
                        onChange={(event) =>
                            handleInputChange("password", event)
                        }
                        value={enteredValues.password || ""}
                    >
                        Password
                    </label>
                    <input id="password" type="password" name="password" />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
