let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

const drawerList = document.getElementById("drawer-list");

const changeBreakdown = document.getElementById("change-breakdown");


const currencyUnits = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
}

const renderDrawer = () => {
  if (!drawerList) return;

  drawerList.innerHTML = "";

  cid.forEach(([name, amount]) => {
    const labels = {
    "PENNY" : "Pennies" ,
    "NICKEL" : "Nickels" ,
    "DIME" : "Dimes" ,
    "QUARTER" : "Quarters" ,
    "ONE" : "Ones" ,
    "FIVE" : "Fives" ,
    "TEN" : "Tens" ,
    "TWENTY" : "Twenties" ,
    "ONE HUNDRED" : "Hundreds"
    };

    const li = document.createElement("li");
    li.textContent = `${labels[name]}: $${amount}`;
    drawerList.appendChild(li);
  })
}
purchaseBtn.addEventListener("click", () => {
  const cash = Number(cashInput.value);
  let change = +(cash - price).toFixed(2);

  if (changeBreakdown) changeBreakdown.innerHTML = "";
  renderDrawer();
  
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (cash === price) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }

  const totalCID = +cid.reduce((sum, [, amount]) => sum + amount, 0).toFixed(2);

  if (totalCID < change) {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  let remainingChange = change;
  const changeArray = [];

  const reversedCID = [...cid].reverse();

  for (let [name, amount] of reversedCID) {
    const unitValue = currencyUnits[name];
    let used = 0;

    while (remainingChange >= unitValue && amount > 0) {
      remainingChange = +(remainingChange - unitValue).toFixed(2);
      amount = +(amount - unitValue).toFixed(2);
      used = +(used + unitValue).toFixed(2);
    }

    if (used > 0) {
      changeArray.push([name, used]);
    }
  }

  if (remainingChange > 0) {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  if (totalCID === change) {
    let result = "Status: CLOSED";
    changeArray.slice().reverse().forEach(([name, amount]) => {
      result += ` ${name}: $${amount}`;
    })
    changeDue.textContent = result;
    
    if (changeBreakdown) {
      changeArray.slice().reverse().forEach(([name, amount]) => {
        const li = document.createElement("li");
        li.textContent = `${name}: $${amount}`;
        changeBreakdown.appendChild(li);
      })
    }
    return;
  }

  let result = "Status: OPEN";
  changeArray.forEach(([name, amount]) => {
    result += ` ${name}: $${amount}`;
  })
  changeDue.textContent = result;

  if (changeBreakdown) {
    changeArray.forEach(([name, amount]) => {
      const li = document.createElement("li");
      li.textContent = `${name}: $${amount}`;
      changeBreakdown.appendChild(li);
    })
  }
})
