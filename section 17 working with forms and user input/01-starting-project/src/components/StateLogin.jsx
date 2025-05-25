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
    const [enteredValues, setEnteredValues] = useState({
        email: "",
        password: "",
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    });

    const emailIsInvalid =
        didEdit.email && !enteredValues.email.includes("@");

    function handleInputChange(identifier, event) {
        setEnteredValues((prevState) => ({
            ...prevState,
            [identifier]: event.target.value,
        }));
        // To set didEdit back to false once user start typing (give user chance to redo input without seeing error), I think this is not needed.
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: false,
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");
    }

    function handleInputBlur(identifier) {
        setDidEdit(prevEdit => ({
            ...prevEdit,
            [identifier]: true,
        }));
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
                        onBlur={() => handleInputBlur("email")}
                        onChange={(event) => handleInputChange("email", event)}
                        value={enteredValues.email || ""}
                    />
                    <div className="control-error">
                        {emailIsInvalid && (
                            <p>Please enter a valid email address.</p>
                        )}
                    </div>
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
