// Функция №1
// Рандомное целое число в диапозоне от 0 до ..... включительно
// Числа должны быть положительными
// Если функции пришли неправильные аргументы, она должна вернуть NaN
// Math.floor(Math.random() * (max - min + 1) ) + min;
// Взято с сайта:
// https://schoolsw3.com/js/js_random.php

 function getRandomInt(min, max) {
  if (min < 0 || min >= max) {
      return NaN
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
getRandomInt();




// Функция №2
// Прверка длины комментария

function checkLength(line, maxLength) {
  if (line.length > maxLength) {
    return false;
  }
    return true;
}
checkLength();
