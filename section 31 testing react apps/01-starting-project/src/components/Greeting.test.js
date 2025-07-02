import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting />); // pass in jsx code to render

    // Act
    // ... nothing

    // Assert
    // screen.get will throw an error if the element is not found
    // screen.query will return null if the element is not found
    // screen.find will return a promise that resolves to the element if it is found
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument(); // check if the element is in the document
    screen.getByText('Hello World', { exact: false }); // with exact: false, it will match any text that contains 'Hello World!' and ignore case sensitivity
    expect(helloWorldElement).toBeInTheDocument(); // check if the element is in the document
});