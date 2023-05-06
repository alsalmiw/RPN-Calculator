# CLI RPN Calculator
This is a command-line reverse polish notation (RPN) calculator designed for users who are comfortable with UNIX-like CLI utilities. The calculator currently supports the basic four arithmetic operators (addition, subtraction, multiplication, and division) and is designed with extensibility in mind for future operators and alternate interfaces (such as WebSocket, file, or TCP socket).

One of the key choices in the implementation is the use of the readline module from the built-in Node.js library, which provides a convenient interface for reading from and writing to the command line.

By using node:readline, the calculator can efficiently handle user input and output without relying on third-party libraries. The readline module simplifies the process of reading from standard input and writing to standard output, making it easy to implement the command-line interface for the calculator.

The benefits of using readline also extend to future considerations for implementing WebSocket, file, or TCP socket interfaces. The modularity and abstraction provided by the readline module make it easier to swap out the input and output methods with alternative interfaces, such as reading from a file or a network socket. This flexibility allows for a smoother transition when adding new input/output methods to the calculator, making it more adaptable to different use cases and environments.

## Solution Overview
The solution is implemented using a modular and extensible design, allowing for easy addition of new operators and features in the future. The code is well-abstracted, with a clear separation of concerns and meaningful naming conventions.

The calculator reads from standard input and writes to standard output. It handles errors and user input, providing helpful messages when necessary.

## Technical Choices and Architecture
The CLI RPN Calculator is written in TypeScript and runs on Node.js, chosen for its performance, ease of use, and extensive community support. The code is organized into the following components:

index.ts: The entry point of the application, responsible for handling user input and output
rpnCalculator: The core logic of the calculator, including the implementation of the arithmetic operators and the RPN evaluation algorithm



## Running the Code
To run the CLI RPN Calculator, follow these steps:

Ensure you have Node.js (version 14 or higher) and npm installed on your machine.
Clone the repository: `git clone https://github.com/alsalmiw/RPN-Calculator.git`
Navigate to the project directory: `cd rpn-calc`
Install the dependencies: `npm install`
Run the calculator: `npm run start`
Enter your RPN expressions at the prompt and press Enter to see the result. Type q or use Ctrl+D (EOF) to exit the calculator.


## Tests
To run the test suite for the CLI RPN Calculator, follow these steps:

Ensure you have completed the prerequisites mentioned in the "Running the Code" section
Navigate to the project directory: cd cli-rpn-calculator
Run the tests: npm run test
The test suite is implemented using Jest, a popular testing framework for JavaScript and TypeScript. The tests cover various scenarios and edge cases to ensure the calculator works correctly and prevent regressions.
