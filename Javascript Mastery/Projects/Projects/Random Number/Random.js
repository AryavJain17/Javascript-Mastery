const randomNoGenerator = () => {
    let min = document.querySelector("#num1").value;
    let max = document.querySelector("#num2").value;
    if (min === '' || max === '') {
        alert("One or More than one field is empty");
        return;
    }

    min = parseInt(min);
    max = parseInt(max);

    let randomNo = Math.floor(Math.random() * (max - min + 1) + min);

    document.querySelector("#result").innerHTML = `The Result is ${randomNo}`;
}