document.getElementById('calculate').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Kérlek, adj meg két számot!';
    } else {
        switch (operation) {
            case 'addition':
                result = num1 + num2;
                break;
            case 'subtraction':
                result = num1 - num2;
                break;
            case 'division':
                result = num2 !== 0 ? num1 / num2 : 'Nullával nem osztható!';
                break;
            case 'multiplication':
                result = num1 * num2;
                break;
            default:
                result = 'Ismeretlen művelet!';
        }
    }

    document.getElementById('result').textContent = result;
});