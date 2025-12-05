const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const validRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

checkBtn.addEventListener("click", () => {
  const value = input.value.trim();

  if (!value) {
    alert("Please provide a phone number");
    return;
  }

  const isValid = validRegex.test(value);

  results.textContent = isValid
    ? `Valid US number: ${value}`
    : `Invalid US number: ${value}`;
});

clearBtn.addEventListener("click", () => {
  results.textContent = "";
});

