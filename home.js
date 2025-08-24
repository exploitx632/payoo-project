document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
});

document
  .getElementById("addMoney-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const card = document.getElementById("cards").value;
    const cardNumber = document.getElementById("cardNumber").value;

    let addMoney = parseInt(document.getElementById("addMoney").value);

    const pin = document.getElementById("pin").value;
    let balance = parseInt(document.getElementById("balance").innerText);
    let totalBalance = balance + addMoney;

    let currentBalance = (document.getElementById("balance").innerText =
      totalBalance);
  });
