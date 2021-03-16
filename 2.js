function highestDigit(num){
  let hdigit = 0;
  let x = 0;

  while (num >= 1){
      x = num %10;
      if (hdigit < x){
          hdigit = x;
      }
      num = Math.floor(num /10);
  }
  return hdigit;
}
console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));