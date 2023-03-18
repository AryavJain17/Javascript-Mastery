//alert("Hello world");

// Operator and Operand

var num1 = 22;
console.log(num1);
num1 = -num1 // - is the unary operator and num1 is operand, because the - is working on only 1 operand its called unary operation
console.log(num1);

var num2 = 25;
var result = 2 + num2;  //  *,/,-,+
//+ is the binary operator and num2 and 2 is operand, because the + is working on only 2 operands its called Binary operation
console.log(result);

var x = 5;
var y = 2;

// Rithmetic operations
console.log("Result of Addition is " + (x+y));
console.log("Result of Subtraction is " + (x-y));
console.log("Result of Multiplication is " + (x*y));
console.log("Result of Division is " + (x/y));
console.log("Result of exponential is " + (x**y));//25
console.log("Result of x++ is " + (x++));//5
console.log("Result of ++x is " + (++x));//7

y = y++; //y+1
y += 1; // y+1
y -= 1; // y-1
y *= y; // y*y 

console.log("hello "+"-" + "world");

var firstName = "John";
var lastName = "Doe";

console.log("Your first name is "+firstName+ " and lastname is "+lastName+ " Your full name is " +firstName+" "+lastName);
console.log(`Your first name is ${firstName} and last Name is ${lastName} Your full name is  ${firstName}  ${lastName}`);
