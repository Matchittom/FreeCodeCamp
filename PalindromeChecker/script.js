const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const input = textInput.value.trim();

  if (input === "") {
    alert("Please input a value");
    return;
  }

  // Normalize input: remove non-alphanumeric characters & lowercase
  const cleanStr = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversedStr = cleanStr.split("").reverse().join("");

  if (cleanStr === reversedStr) {
    result.textContent = `${input} is a palindrome.`;
    result.className = "palindrome";
  } else {
    result.textContent = `${input} is not a palindrome.`;
    result.className = "not-palindrome";
  }
});
