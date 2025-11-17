
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const intToRoman = (num) => {
  const values = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
  ];

  const symbols = [
    "M", "CM", "D", "CD",
    "C", "XC", "L", "XL",
    "X", "IX", "V", "IV", "I"
  ];
  let roman ="";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      roman += symbols[i];
      num -= values[i];
    }
  }

  return roman;
};
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt)) {
    result.textContent = "Please enter a valid number";
    return;
  }

  if (inputInt < 1) {
    result.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

    if (inputInt > 3999) {
      result.textContent = "Please enter a number less than or equal to 3999";
      return;
    }

  result.textContent = intToRoman(inputInt);
  };


convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
