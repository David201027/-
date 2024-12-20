function convertToScientific() {
    let num = parseFloat(document.getElementById('numberInput').value);
    if (isNaN(num)) {
        document.getElementById('result').textContent = 'Введите корректное число';
        return;
    }

    // Преобразование числа в научную нотацию
    let exponent = Math.floor(Math.log10(Math.abs(num))); // Находим экспоненту (степень 10)
    let mantissa = num / Math.pow(10, exponent); // Находим мантиссу

    // Форматируем результат как "a * 10^n"
    let scientificNotation = mantissa.toFixed(4) + ' × 10^' + exponent;

    document.getElementById('result').textContent = scientificNotation;
}
