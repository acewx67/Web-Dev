// let s = "4+6/2*20-4";
export default function evaluate(s) {
  let expLength = s.length;
  let arr = [];
  let j = 0;
  let numStart = 0;

  for (let i = 0; i < expLength; i++) {
    if (i === expLength - 1) {
      arr[j] = +s.substring(numStart, expLength);
    } else if (s[i] === "/" || s[i] === "*" || s[i] === "+" || s[i] ==="-") {
      arr[j] = +s.substring(numStart, i);
      arr[j + 1] = s[i];
      j += 2;
      numStart = i + 1;
    }
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "/") {
      let solved = arr[i - 1] / arr[i + 1];
      arr.splice(i - 1, 3, solved);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*") {
      let solved = arr[i - 1] * arr[i + 1];
      arr.splice(i - 1, 3, solved);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") {
      let solved = arr[i - 1] + arr[i + 1];
      arr.splice(i - 1, 3, solved);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-") {
      let solved = arr[i - 1] - arr[i + 1];
      arr.splice(i - 1, 3, solved);
    }
  }
  console.log(arr);
  return arr + '';
}


