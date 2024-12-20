function convertToScientific() {
    let num = parseFloat(document.getElementById('numberInput').value);
    if (isNaN(num)) {
        document.getElementById('result').textContent = 'הזן מספר תקין';
        return;
    }

    let exponent = Math.floor(Math.log10(Math.abs(num)));
    let mantissa = num / Math.pow(10, exponent);

    let scientificNotation = mantissa.toFixed(15) + ' * 10^' + exponent;

    document.getElementById('result').textContent = scientificNotation;
}

function convertToRegular() {
    let input = document.getElementById('numberInput').value;

    let regex = /^([+-]?\d*\.?\d+)\s*\*\s*10\^([+-]?\d+)$/;
    let match = input.match(regex);

    if (match) {
        let mantissa = parseFloat(match[1]);
        let exponent = parseInt(match[2]); 

        let result = mantissa * Math.pow(10, exponent);

        document.getElementById('result').textContent = result.toString();
    } else {
        document.getElementById('result').textContent = 'הזן רישום מדעי תקין';
    }
}