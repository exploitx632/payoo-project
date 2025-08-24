document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
});

let validPin = 1234;
// add money form 

document.getElementById("add-money").addEventListener("click",function(){
  document.getElementById("addMoney-form").classList.remove("hidden");
  document.getElementById("cashOut-form").classList.add("hidden");
})
// cash out form 
document.getElementById("cash-out").addEventListener("click",function(){
  document.getElementById("cashOut-form").classList.remove("hidden");
  document.getElementById("addMoney-form").classList.add("hidden");});


document
  .getElementById("addMoney-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const card = document.getElementById("cards").value;
    const cardNumber = document.getElementById("cardNumber").value;

    let amount = parseInt(document.getElementById("addMoney").value);

    const pin = parseInt(document.getElementById("pin").value);
    let balance = parseInt(document.getElementById("balance").innerText);
    let totalBalance = balance + amount;

    console.log(card);
    
    if (cardNumber.length != 16) {
      alert("Invalid Card Number");
      return;
    }
    if (pin !== validPin) {
      alert("Invalid Pin");
      return;
    }
    let currentBalance = (document.getElementById("balance").innerText =
      totalBalance);
  });
  