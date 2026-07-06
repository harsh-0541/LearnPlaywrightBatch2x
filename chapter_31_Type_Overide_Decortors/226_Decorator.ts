function Log(originalMethod: any, context: ClassMethodDecoratorContext) {
    const methodName = String(context.name);
    return function (this: any, ...args: any[]) {
        console.log(`Called ${methodName} with args:`, args);
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @Log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(2, 3);