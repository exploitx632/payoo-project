document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
});

let validPin = 1234;
let validCoupon = "GetBonus";

// featured Elements
const homeSection = document.getElementById("home-section");
// get element 

function getElement(id){
  const element = document.getElementById(id);
  return element;
}

// btn style 
function btnStyle(id){
  let btns = document.getElementsByClassName('form-btn');
  for(let btn of btns){
    btn.classList.remove('border-[#0874f2]','bg-[#0874f20d');
    btn.classList.add("border-gray-300")

  }
  getElement(id).classList.remove("border-gray-300")
  getElement(id).classList.add('border-[#0874f2]','bg-[#0874f20d]');
}




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


// handle toggle features 
function handleToggle(id){
  const forms = document.getElementsByClassName('form');
  for(let form of forms){
    form.classList.add('hidden')
  }
  getElement(id).classList.remove('hidden')
};
// add money form

getElement('add-money-menu').addEventListener("click", function () {
 handleToggle('add-money-form')
 btnStyle('add-money-menu');
});
// add money btn
getElement('add-money-btn').addEventListener("click", function (event) {
  event.preventDefault();
  let balance = getElementInnerNumber("balance");
  const card = document.getElementById("add-money-cards").value;

  let amount = getElementNumber("add-money");

  const cardNumber = getElementValue("add-money-cardNumber");

  if (cardNumber.length != 16) {
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

getElement("cash-out").addEventListener("click", function () {
  handleToggle('cashOut-form')
  btnStyle('cash-out')
  
});

//cash out btn

getElement('cash-out-btn').addEventListener("click", function (event) {
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
getElement("transfer").addEventListener("click", function () {
  handleToggle('transfer-form')
});

// transfer btn

getElement('transfer-btn').addEventListener("click", function (event) {
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

getElement("bonus").addEventListener("click", function () {
  handleToggle('bonus-form')
});

// bonus btn

getElement('bonus-btn').addEventListener("click", function (event) {
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
getElement("bill-menu").addEventListener("click", function () {
  const forms = document.getElementsByClassName('form');
  handleToggle('bill-form')
});


// bill btn

getElement('pay-btn').addEventListener("click", function (event) {
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

// transaction form  

getElement("transaction-menu").addEventListener("click", function () {
  handleToggle('transaction-form')
});
