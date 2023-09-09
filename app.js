// Функция для вычисления факториала числа
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Функция для проверки, является ли число простым
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }