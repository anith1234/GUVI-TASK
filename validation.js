
(function () {
  const input = document.querySelector("input");
  const submitBtn = document.querySelector("button");

  input.onchange = () => {
    if (input.value !== "" && input.value.length === 5) {
      submitBtn.disabled = false;
    } else {
      alert("Verification code need to be 5 numbers !");
      submitBtn.disabled = true;
    }
  };
})();
