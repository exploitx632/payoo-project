document
  .getElementById("addMoney-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let availableBalance = parseInt(
      document.getElementById("balance").innerText
    );

    let addMoney = parseInt(document.getElementById("addMoney").value);

    if (typeof addMoney === "number") {
      console.log(availableBalance + addMoney);
    }else{
        alert="Invalid Number";
    }
  });
