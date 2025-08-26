document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
});

let validPin = 1234;
let validCoupon = "GetBonus";
const transactionData = [];

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
    btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]','text-[#0874f2]','font-semibold');
    btn.classList.add("border-gray-300")

  }
  getElement(id).classList.remove("border-gray-300")
  getElement(id).classList.add('border-[#0874f2]','bg-[#0874f20d]','text-[#0874f2]','font-semibold');
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

// transactionData handle 
function transData(type){
  const data = {
    name:type,
    date: new Date().toLocaleTimeString()
  }
  transactionData.push(data);
}
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
  if(amount <= 0){
    alert('Invalid Amount');
    return;
  }
  const pin = getElementNumber("add-money-pin");

  if (pin !== validPin) {
    alert("Invalid Pin");
    return;
  }

  let totalBalance = balance + amount;
  setInnerText(totalBalance);

  transData('Add Money')
  
  

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
  if(cashOutAmount <= 0 && cashOutAmount>balance){
    alert('Invalid Amount');
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

  transData('Cash Out')

  resetElement("cash-out-money").reset();
});

// transfer form
getElement("transfer").addEventListener("click", function () {
  handleToggle('transfer-form');
  btnStyle('transfer');
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
  if(transferAmount <= 0 && transferAmount > balance){
    alert('Invalid Amount');
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
  transData('Transfer')

  resetElement("Transfer-money").reset();
});

// bonus form

getElement("bonus").addEventListener("click", function () {
  handleToggle('bonus-form');
  btnStyle('bonus');

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
  transData('Got Bonus')

  resetElement('boNus').reset();
});

// bill form
getElement("bill-menu").addEventListener("click", function () {
  const forms = document.getElementsByClassName('form');
  handleToggle('bill-form');
  btnStyle('bill-menu');
  

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
  if(payAmount <= 0 && payAmount>balance){
    alert('Top Up Money');
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
  transData('Bill Payment')

  resetElement('billing-form').reset();
});

// transaction form  

getElement("transaction-menu").addEventListener("click", function () {
  handleToggle('transaction-form');
  btnStyle('transaction-menu');
  const transactionContainer = getElement('transaction-container');
  transactionContainer.innerHTML = "";
  for(let data of transactionData){
    const div = document.createElement('div');
    div.innerHTML=` <div class="text-[#080808b1] payment bg-white p-4 rounded-2xl flex justify-between items-center mb-3.5">
                  <div class=" flex items-center gap-4 " id="payment">
                      <div class="logo bg-gray-100 rounded-full p-4 flex justify-center items-center">
                          <img src="assets/wallet1.png" alt="">
                      </div>
                      <div class="description">
                          <h1 class="font-semibold">${data.name}</h1>
                          <p>${data.date}</p>
                      </div>
                  </div>
                  <div class="text-2xl">
                      <i class="fa-solid fa-ellipsis fa-rotate-270"></i>
                  </div>
              </div>
              `
  transactionContainer.appendChild(div);
  }
  

});
