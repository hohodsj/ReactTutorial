import Input from "./Input";
import { useInput } from "../hooks/useInput";

import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function Login() {
    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        error: emailHasError,
    } = useInput("", (value) => isEmail(value) && isNotEmpty(value)); // to execute multiple functions

    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError,
    } = useInput("", (value) => hasMinLength(value, 6));

    function handleSubmit(event) {
        event.preventDefault();
        if (emailHasError || passwordHasError) {
            console.log("Form has errors, cannot submit");
            return;
        }
        // Here you would typically send the data to your server
        console.log("Sending HTTP request with", emailValue, passwordValue);
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
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    value={emailValue}
                    error={
                        emailHasError && "Please enter a valid email address"
                    }
                />
                <Input
                    label="password"
                    id="password"
                    type="password"
                    name="password"
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                    value={passwordValue}
                    error={
                        passwordHasError &&
                        "Password must be at least 6 characters long"
                    }
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
