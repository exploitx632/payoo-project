document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
});

let validPin = 1234;
let validCoupon = "GetBonus";

// featured Elements
const homeSection = document.getElementById("home-section");
const addMoney = document.getElementById("add-money-menu");
const addMoneyForm = document.getElementById("add-money-form");
const addMoneyBtn = document.getElementById("add-money-btn");

const cashOut = document.getElementById("cash-out");
const cashOutForm = document.getElementById("cashOut-form");
const cashOutBtn = document.getElementById("cash-out-btn");

const transfer = document.getElementById("transfer");
const transferForm = document.getElementById("transfer-form");
const transferBtn = document.getElementById("transfer-btn");

const bonus = document.getElementById("bonus");
const bonusForm = document.getElementById("bonus-form");
const bonusBtn = document.getElementById("bonus-btn");

const bill = document.getElementById("bill-menu");
const billForm = document.getElementById("bill-form");
const billBtn = document.getElementById("pay-btn");

const transaction = document.getElementById("transaction-menu");
const transactionForm = document.getElementById("transaction-form");



// function for get element value
function getElementNumber(id) {
  let inputField = document.getElementById(id);
  let inputValue = inputField.value;
  let inputNumber = parseInt(inputValue);
  return inputNumber;
}
function getElementInnerNumber(id) {
  let inputField = document.getElementById(id);
  let inputText = inputField.innerText;
  let inputNumber = parseInt(inputText);
  return inputNumber;
}
function getElementValue(id) {
  let inputField = document.getElementById(id);
  let inputValue = inputField.value;
  return inputValue;
}

function resetElement(id) {
  let element = document.getElementById(id);
  return element;
}
// set innerText function

function setInnerText(value) {
  let availableBalance = document.getElementById("balance");
  availableBalance.innerText = value;
}
// add money form
addMoney.addEventListener("click", function () {
  addMoneyForm.classList.remove("hidden");
  cashOutForm.classList.add("hidden");
  homeSection.classList.add("hidden");
  bonusForm.classList.add("hidden");
  transferForm.classList.add("hidden");
  billForm.classList.add("hidden");
  transactionForm.classList.add("hidden");
});
// add money btn
addMoneyBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let balance = getElementInnerNumber("balance");
  const card = document.getElementById("add-money-cards").value;

  let amount = getElementNumber("add-money");

  const cardNumber = getElementValue("add-money-cardNumber");

  if (cardNumber.length != 16) {
    console.log(cardNumber.length);
    alert("Invalid Card Number");
    return;
  }
  const pin = getElementNumber("add-money-pin");

  if (pin !== validPin) {
    alert("Invalid Pin");
    return;
  }

  let totalBalance = balance + amount;
  setInnerText(totalBalance);

  resetElement("addMoney-form").reset();
});
// cash out form
cashOut.addEventListener("click", function () {
  homeSection.classList.add("hidden");
  addMoneyForm.classList.add("hidden");
  bonusForm.classList.add("hidden");
  transferForm.classList.add("hidden");
  billForm.classList.add("hidden");
  transactionForm.classList.add("hidden");
  cashOutForm.classList.remove("hidden");
});

//cash out btn

cashOutBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let balance = getElementInnerNumber("balance");
  const agentNumber = getElementNumber("AgentNumber");
  const cashOutAmount = getElementNumber('cashOut');
  if (balance === 0) {
    alert("Not available balance");
    return;
  }
  if (agentNumber.length < 16) {
    alert("Invalid Agent");
    return;
  }

  const cashPin = getElementNumber("cashOutPin");
  if (cashPin !== validPin) {
    alert("Invalid Pin");
    return;
  }

  let totalBalance = balance - cashOutAmount;
  setInnerText(totalBalance);
  resetElement("cash-out-money").reset();
});

// transfer form

transfer.addEventListener("click", function (event) {
  addMoneyForm.classList.add("hidden");
  homeSection.classList.add("hidden");
  cashOutForm.classList.add("hidden");
  bonusForm.classList.add("hidden");
  transferForm.classList.remove("hidden");
  billForm.classList.add("hidden");
  transactionForm.classList.add("hidden");
});

// transfer btn

transferBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let balance = getElementInnerNumber("balance");
  const userNumber = getElementNumber("userNumber");
  const transferAmount = getElementNumber("transferAmount");

  if (balance === 0) {
    alert("Not available balance to transfer");
    return;
  }
  if (userNumber.length < 16) {
    alert("Invalid User");
    return;
  }

  const transferPin = getElementNumber("transferPin");
  if (transferPin !== validPin) {
    alert("Invalid Pin");
    return;
  }
  let totalBalance = balance - transferAmount;
  setInnerText(totalBalance);
  resetElement("Transfer-money").reset();
});

// bonus form

bonus.addEventListener("click", function (event) {
  addMoneyForm.classList.add("hidden");
  homeSection.classList.add("hidden");
  cashOutForm.classList.add("hidden");
  transferForm.classList.add("hidden");
  bonusForm.classList.remove("hidden");
  billForm.classList.add("hidden");
  transactionForm.classList.add("hidden");
});

// bonus btn

bonusBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let balance = getElementInnerNumber('balance');
  const couponNumber = getElementValue('coupon');
  if (couponNumber === validCoupon) {
    let bonus = balance + 200;
    setInnerText(bonus);
    alert("You have got $200");
  } else {
    alert("Invalid Coupon");
  }
  resetElement('boNus').reset();
});

// bill form

bill.addEventListener("click", function () {
  addMoneyForm.classList.add("hidden");
  homeSection.classList.add("hidden");
  cashOutForm.classList.add("hidden");
  transferForm.classList.add("hidden");
  bonusForm.classList.add("hidden");
  billForm.classList.remove("hidden");
  transactionForm.classList.add("hidden");
});

// bill btn

billBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let balance = getElementInnerNumber('balance');
  const payCard = getElementNumber("payCardNumber");
  const payAmount = getElementNumber("amount-pay");

  if (balance === 0) {
    alert("Not available balance to pay");
    return;
  }
  if (payCard.length < 16) {
    alert("Invalid User");
    return;
  }

  const payPin = getElementNumber("payPin");
  if (payPin !== validPin) {
    alert("Invalid Pin");
    return;
  }
  let totalBalance = balance - payAmount;
  setInnerText(totalBalance);

  resetElement('billing-form').reset();
});

transaction.addEventListener("click", function () {
  addMoneyForm.classList.add("hidden");
  homeSection.classList.add("hidden");
  cashOutForm.classList.add("hidden");
  transferForm.classList.add("hidden");
  bonusForm.classList.add("hidden");
  billForm.classList.add("hidden");
  transactionForm.classList.remove("hidden");
});
