document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
});

let validPin = 1234;

// featured Elements
const homeSection = document.getElementById('home')
const addMoney = document.getElementById("add-money");
const addMoneyForm = document.getElementById("addMoney-form");
const addMoneyBtn = document.getElementById("addMoney-btn");

const cashOut = document.getElementById("cash-out");
const cashOutForm = document.getElementById("cashOut-form");
const cashOutBtn = document.getElementById("cash-out-btn");

// add money form
addMoney.addEventListener("click", function () {
  addMoneyForm.classList.remove("hidden");
  cashOutForm.classList.add("hidden");
  homeSection.classList.add("hidden");
});
// add money btn
addMoneyBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let balance = parseInt(document.getElementById("balance").innerText);
  const card = document.getElementById("cards").value;
  const cardNumber = document.getElementById("cardNumber").value;

  let amount = parseInt(document.getElementById("addMoney").value);

  if (cardNumber.length != 16) {
    alert("Invalid Card Number");
    return;
  }
  const pin = parseInt(document.getElementById("pin").value);

  if (pin !== validPin) {
    alert("Invalid Pin");
    return;
  }

  let totalBalance = balance + amount;
  document.getElementById("balance").innerText = totalBalance;
  // document.getElementById('addMoney');
});
// cash out form
cashOut.addEventListener("click", function () {
  addMoneyForm.classList.add("hidden");
  homeSection.classList.add("hidden");
  cashOutForm.classList.remove("hidden");
});

//cash out btn

cashOutBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let balance = parseInt(document.getElementById("balance").innerText);
  const agentNumber = document.getElementById("AgentNumber").value;
  const cashOutAmount = parseInt(document.getElementById("cashOut").value);
  if(balance === 0){
    alert('Not available balance');
    return;
  }
  if (agentNumber.length < 16) {
    alert("Invalid Agent");
    return;
  }

  const cashPin = parseInt(document.getElementById("cashOutPin").value);
  if (cashPin !== validPin) {
    alert("Invalid Pin");
    return;
  }

  let totalBalance = balance - cashOutAmount;
  document.getElementById("balance").innerText = totalBalance;

  document.getElementById('cashOut').value = 0;
});
