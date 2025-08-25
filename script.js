document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobile = 12345678910;
    const pin = 1234;
    document.getElementById('login-form').reset();

    const mobileNumberValue = document.getElementById("mobile-number").value;
    const mobileNumber = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById("pin-number").value;
    const pinNumber = parseInt(pinNumberValue);

    if (mobileNumber === mobile && pinNumber === pin) {
      window.location.href='./home.html';
    }else{
        alert("invalid credentials")
    }
  });
