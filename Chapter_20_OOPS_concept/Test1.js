class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    subtract() {
        return this.a - this.b;
    }

    modulus() {
        return this.a % this.b;
    }

    divide() {
        if (this.b === 0) return "Cannot divide by zero";
        return this.a / this.b;
    }

    multiply() {
        return this.a * this.b;
    }
}

// Create object with two variables
const calc = new Calculator(20, 6);

console.log("Subtraction :", calc.subtract()); // 20 - 6  = 14
console.log("Modulus     :", calc.modulus());  // 20 % 6  = 2
console.log("Division    :", calc.divide());   // 20 / 6  = 3.333...
console.log("Multiplication:", calc.multiply()); // 20 * 6 = 120