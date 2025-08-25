document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
  window.scrollTo(0, 0);
});

let validPin = 1234;
let validCoupon = 'GetBonus';

// featured Elements
const homeSection = document.getElementById('home-section')
const addMoney = document.getElementById("add-money-menu");
const addMoneyForm = document.getElementById("add-money-form");
const addMoneyBtn = document.getElementById("add-money-btn");

const cashOut = document.getElementById("cash-out");
const cashOutForm = document.getElementById("cashOut-form");
const cashOutBtn = document.getElementById("cash-out-btn");

const transfer = document.getElementById('transfer');
const transferForm = document.getElementById('transfer-form');
const transferBtn = document.getElementById('transfer-btn');

const bonus = document.getElementById('bonus');
const bonusForm = document.getElementById('bonus-form');
const bonusBtn = document.getElementById('bonus-btn');

const bill = document.getElementById('bill-menu');
const billForm = document.getElementById('bill-form');
const billBtn = document.getElementById('pay-btn');

const transaction = document.getElementById('transaction-menu');
const transactionForm = document.getElementById('transaction-form');

// add money form
addMoney.addEventListener("click", function () {
  addMoneyForm.classList.remove("hidden");
  cashOutForm.classList.add("hidden");
  homeSection.classList.add("hidden");
  bonusForm.classList.add('hidden');
  transferForm.classList.add('hidden');
  billForm.classList.add('hidden');
  transactionForm.classList.add("hidden");
  window.scrollTo(0, 0);
  document.body.style.height = 'auto';
});
// add money btn
addMoneyBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let balance = parseInt(document.getElementById("balance").innerText);
  const card = document.getElementById("cards").value;
  const cardNumber = document.getElementById("add-money-cardNumber").value;

  let amount = parseInt(document.getElementById("add-money").value);

  if (cardNumber.length != 16) {
    alert("Invalid Card Number");
    return;
  }
  const pin = parseInt(document.getElementById("add-money-pin").value);

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
  homeSection.classList.add("hidden");
  addMoneyForm.classList.add("hidden");
  bonusForm.classList.add('hidden');
  transferForm.classList.add('hidden');
  billForm.classList.add('hidden');
  transactionForm.classList.add("hidden");
  cashOutForm.classList.remove("hidden");
  window.scrollTo(0, 0);

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

});


// transfer form 

transfer.addEventListener('click',function(event){
  addMoneyForm.classList.add("hidden");
  homeSection.classList.add("hidden");
  cashOutForm.classList.add("hidden");
  bonusForm.classList.add('hidden');
  transferForm.classList.remove('hidden');
  billForm.classList.add('hidden');
  transactionForm.classList.add("hidden");
  window.scrollTo(0, 0);

});

// transfer btn 

transferBtn.addEventListener('click',function(event){
  event.preventDefault();
  let balance = parseInt(document.getElementById("balance").innerText);
  const userNumber = document.getElementById("userNumber").value;
  const transferAmount = parseInt(document.getElementById("transferAmount").value);
   
  if(balance === 0){
    alert('Not available balance to transfer');
    return;
  }
  if (userNumber.length < 16) {
    alert("Invalid User");
    return;
  }

  const transferPin = parseInt(document.getElementById("transferPin").value);
  if (transferPin !== validPin) {
    alert("Invalid Pin");
    return;
  }
  let totalBalance = balance - transferAmount;
  document.getElementById("balance").innerText = totalBalance;
})

// bonus form 

bonus.addEventListener('click',function(event){
  addMoneyForm.classList.add("hidden");
  homeSection.classList.add("hidden");
  cashOutForm.classList.add("hidden");
  transferForm.classList.add('hidden');
  bonusForm.classList.remove('hidden');
  billForm.classList.add('hidden');
  transactionForm.classList.add("hidden");
  window.scrollTo(0, 0);
});

// bonus btn 

bonusBtn.addEventListener('click',function(event){
  event.preventDefault();
  let balance = parseInt(document.getElementById("balance").innerText);
  const couponNumber = document.getElementById('coupon').value;
  if(couponNumber === validCoupon){
    document.getElementById('balance').innerText = balance + 200;
    alert('You have got $200');
  }else{
    alert('Invalid Coupon');
  }
})

// bill form 

bill.addEventListener('click',function(){
  addMoneyForm.classList.add("hidden");
  homeSection.classList.add("hidden");
  cashOutForm.classList.add("hidden");
  transferForm.classList.add('hidden');
  bonusForm.classList.add('hidden');
  billForm.classList.remove('hidden');
  transactionForm.classList.add("hidden");
  window.scrollTo(0, 0);
  document.body.style.height='auto';

});

// bill btn 

billBtn.addEventListener('click',function(event){
  event.preventDefault();
  let balance = parseInt(document.getElementById('balance').innerText);
  const payCard = document.getElementById("payCardNumber").value;
  const payAmount = parseInt(document.getElementById("amount-pay").value);
   
  if(balance === 0){
    alert('Not available balance to pay');
    return;
  }
  if (payCard.length < 16) {
    alert("Invalid User");
    return;
  }

  const payPin = parseInt(document.getElementById("payPin").value);
  if (payPin !== validPin) {
    alert("Invalid Pin");
    return;
  }
  let totalBalance = balance - payAmount;
  document.getElementById("balance").innerText = totalBalance;
})

transaction.addEventListener('click',function(){
  addMoneyForm.classList.add("hidden");
  homeSection.classList.add("hidden");
  cashOutForm.classList.add("hidden");
  transferForm.classList.add('hidden');
  bonusForm.classList.add('hidden');
  billForm.classList.add('hidden');
  transactionForm.classList.remove("hidden");
  window.scrollTo(0, 0);
  document.body.style.height='auto';

})