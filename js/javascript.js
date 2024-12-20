// Функция для перевода числа в научную нотацию
function convertToScientific() {
    let num = parseFloat(document.getElementById('numberInput').value);
    if (isNaN(num)) {
        document.getElementById('result').textContent = 'הזן מספר תקין';
        document.getElementById('scientificResult').textContent = '';
        return;
    }

    // Преобразование числа в научную нотацию
    let exponent = Math.floor(Math.log10(Math.abs(num))); // Находим экспоненту (степень 10)
    let mantissa = num / Math.pow(10, exponent); // Находим мантиссу

    // Используем toExponential, чтобы получить динамическую точность
    let scientificNotation = num.toExponential(); // Научная нотация с оптимальной точностью

    // Показать результат
    document.getElementById('result').textContent = num.toString();
    document.getElementById('scientificResult').textContent = scientificNotation;
}

// Функция для перевода числа из научной нотации в обычный формат
function convertToRegular() {
    let input = document.getElementById('numberInput').value;

    // Регулярное выражение для научной нотации в формате "a * 10^n"
    let regex = /^([+-]?\d*\.?\d+)\s*\*\s*10\^([+-]?\d+)$/;
    let match = input.match(regex);

    if (match) {
        let mantissa = parseFloat(match[1]);  // Извлекаем мантиссу
        let exponent = parseInt(match[2]);    // Извлекаем экспоненту

        // Вычисляем результат как мантисса * 10^экспонента
        let result = mantissa * Math.pow(10, exponent);

        // Обновляем оба поля: обычное число и научную нотацию
        let scientificNotation = mantissa.toFixed(4) + ' * 10^' + exponent;

        document.getElementById('result').textContent = result.toString();
        document.getElementById('scientificResult').textContent = scientificNotation;
    } else {
        document.getElementById('result').textContent = 'הזן רישום מדעי תקין';
        document.getElementById('scientificResult').textContent = '';
    }
}