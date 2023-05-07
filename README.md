# CLI RPN Calculator
This is a command-line reverse polish notation (RPN) calculator designed for users who are comfortable with UNIX-like CLI utilities. The calculator currently supports the basic four arithmetic operators (addition, subtraction, multiplication, and division) and is designed with extensibility in mind for future operators and alternate interfaces (such as WebSocket, file, or TCP socket).

One of the key choices in the implementation is the use of the readline module from the built-in Node.js library, which provides a convenient interface for reading from and writing to the command line.

By using `node:readline`, the calculator can efficiently handle user input and output without relying on third-party libraries. The readline module simplifies the process of reading from standard input and writing to standard output, making it easy to implement the command-line interface for the calculator.

## Technical Choices and Architecture
The CLI RPN Calculator is written in TypeScript and runs on Node.js, chosen for its performance, ease of use, and extensive community support. The code is organized into the following components:

- `index.ts`: The entry point of the application, responsible for handling user input and output.
- `rpnCalculator`: The core logic of the calculator, including the implementation of the arithmetic operators and the RPN evaluation algorithm.
- `node:readline`: Its modularity and abstraction makes it easier to swap out the input and output methods with alternative interfaces, such as reading from a file or a network socket.

## Getting Started
To run the CLI RPN Calculator, follow these steps:

- Ensure you have Node.js (version 14 or higher) and npm installed on your machine.
- Clone the repository: `git clone https://github.com/alsalmiw/RPN-Calculator.git`
- Navigate to the project directory: `cd rpn-calc`
- Install the dependencies: `npm install`
- Run the calculator: `npm run start`
- Enter your RPN expressions at the prompt and press Enter to see the result. Type q or use Ctrl+D (EOF) to exit the calculator.


## Running Tests
To run the test suite for the CLI RPN Calculator, follow these steps:

- Ensure you have completed the prerequisites mentioned in the "Running the Code" section
- Navigate to the project directory: `cd rpn-calc`
- Run the tests: `npm run test`
- The test suite is implemented using Jest, a popular testing framework for JavaScript and TypeScript. The tests cover various scenarios and edge cases to ensure the calculator works correctly and prevent regressions.

## Implementation Logic
As a command-line calculator, certain key features were essential to ensure a smooth and user-friendly experience:

1. **Helper Message**: A welcoming message that informs the user about available commands and operators, as well as providing examples of valid operations to guide their usage.
2. **Input Validation**:
    - Ensuring that user input is either a number or a valid operator.
    - For longer single-line operations (more than three characters), validating the appropriate number-to-operator ratio.
3. **Error Message**: A standardized error message format that informs the user about the encountered issue and offers guidance for resolution.
4. **Arithmetic Operations**: Implementing the four basic arithmetic operations (addition, subtraction, multiplication, and division) supported by the calculator.
5. **RPN Calculation Method**: The core RPN calculation method that manages a stack of numbers and calculated values. The method operates as follows:
    - Accepts the current stack and a validated user input array.
    - Iterates through the input array, checking if each element is an operator. If not, the number is pushed onto the end of the stack.
    - If an operator is detected, the last two numbers are popped from the stack, passed to the relevant arithmetic operation, and the result is pushed back onto the stack.
    - Users can continue to input additional numbers, operators, or single-line operations as needed.
    - In the event of an error, the user is prompted to try again and the stack is reset to its initial state.

## Example of usage
```
> 5 5 +
10
> 5
5
> +
15
> 3 3 7 - +
-1
> 3 +
2
> -
13
```
## Commands
```
  h, -help              Print help message
  q, -quit              Quit the calculator
  c, -clear             Clear the calculator state
  s, -show              Toggle show the stack after 
                        each operation
```