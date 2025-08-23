document
  .getElementById("addMoney-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let balance = parseInt(
      document.getElementById("balance").innerText
    );

    const card = document.getElementById("cards").value;
    const cardNumber = document.getElementById("cardNumber").value;

    let addMoney = parseInt(document.getElementById("addMoney").value);

    const pin = document.getElementById("pin").value;
    let totalBalance = balance + addMoney;
    
    
    let currentBalance = document.getElementById("balance").innerText = totalBalance;

  });
