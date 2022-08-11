export const add2Nums = (num1, num2) => num1 + num2;


export const greet = (name = "Anonymous") =>  `Hello, ${name}!`;

export const calculateTip = (billTotal, tipPercent = 20) => 
    (billTotal * tipPercent) / 100;

