import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
    test("renders Hello World as a text", () => {
        // Arrange
        render(<Greeting />); // pass in jsx code to render

        // Act
        // ... nothing

        // Assert
        // screen.get will throw an error if the element is not found
        // screen.query will return null if the element is not found
        // screen.find will return a promise that resolves to the element if it is found
        const helloWorldElement = screen.getByText("Hello World!");
        expect(helloWorldElement).toBeInTheDocument(); // check if the element is in the document
        screen.getByText("Hello World", { exact: false }); // with exact: false, it will match any text that contains 'Hello World!' and ignore case sensitivity
        expect(helloWorldElement).toBeInTheDocument(); // check if the element is in the document
    });

    test("renders It's good to see you! as a text", () => {
        // Arrange
        render(<Greeting />);

        // Act
        // ... nothing

        // Assert
        const outputElement = screen.getByText("It's good to see you!");
        expect(outputElement).toBeInTheDocument();
    });

    test("render changed if the button was clicked", () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement); // simulate a click event on the button

        // Assert
        const outputElement = screen.getByText("Changed");
        expect(outputElement).toBeInTheDocument();
    });

    test("does not render It's good to see you! if the button was clicked", () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement); // simulate a click event on the button

        // Assert
        const outputElement = screen.queryByText("It's good to see you!"); // queryByText returns null if the element is not found
        expect(outputElement).not.toBeInTheDocument(); // check if the element is not in the document
    });
});
