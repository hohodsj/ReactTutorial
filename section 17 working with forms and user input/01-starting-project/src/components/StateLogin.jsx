import { useState } from "react";
import Input from "./Input";

import {isEmail, isNotEmpty, hasMinLength} from '../util/validation';

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

    const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);
    const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6);

    function handleInputChange(identifier, event) {
        setEnteredValues((prevState) => ({
            ...prevState,
            [identifier]: event.target.value,
        }));
        // To set didEdit back to false once user start typing (give user chance to redo input without seeing error), I think this is not needed.
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: false,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");
    }

    function handleInputBlur(identifier) {
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: true,
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    label="email"
                    id="email"
                    type="email"
                    name="email"
                    onBlur={() => handleInputBlur("email")}
                    onChange={(event) => handleInputChange("email", event)}
                    value={enteredValues.email || ""}
                    error={emailIsInvalid ? "Please enter a valid email address" : ""}
                />
                <Input
                    label="password"
                    id="password"
                    type="password"
                    name="password"
                    onBlur={() => handleInputBlur("password")}
                    onChange={(event) => handleInputChange("password", event)}
                    value={enteredValues.password || ""}
                    error={passwordIsInvalid ? "Password must be at least 6 characters long" : ""}
                />
                

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
