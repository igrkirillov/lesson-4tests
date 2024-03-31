export default function isValidCardNumber(number) {
  if (!number) {
    return false;
  }
  return validateByLuhnAlgorithm(number);
}

export function validateByLuhnAlgorithm(number) {
  const numberStr = String(number);
  const givenCheckDigit = +numberStr.substring(number.length - 1);

  let multiplier = 2;
  let sum = 0;
  for (let i = numberStr.length - 2; i >= 0; --i) {
    const digit = +numberStr.substring(i, i + 1);
    const computedStr = String(digit * multiplier);
    for (const char of computedStr) {
      sum += +char;
    }
    if (multiplier === 2) {
      multiplier = 1;
    } else {
      multiplier = 2;
    }
  }
  const calculatedCheckDigit = (10 - sum % 10) % 10;

  return calculatedCheckDigit === givenCheckDigit;
}
