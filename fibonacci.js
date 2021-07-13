function fibonacci(num1, num2) {
    d = 2;
    console.log(num1, num2);
    for(i = 0, i > d; i++, d++;) {
        num1 += num2;
        num2 += num1;
        console.log(num1, num2);
    }
}
fibonacci(0, 1);