function calculateFactorial() {
    let num = document.getElementById("num").value;
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }

    document.getElementById("result").innerHTML =
        "Factorial = " + factorial;
}