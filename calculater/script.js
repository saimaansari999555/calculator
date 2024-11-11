function calculate(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    let result};
    
    switch(operator){
        case 'Addition':
            result = num1 + num2;
            break;
        case 'Subtraction':
            result = num1 - num2;
            break;
        case 'Multiplication':
            result = num1 * num2;
            break;
        case 'Division':
            if(num2 === 0){
                alert('Cannot divide by zero');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Invalid operator');
            return;
            document.getElementById("result").innerText ="Result:" + result;

  
    
}

