// select all usuable id
const depositebl = document.getElementById("deposite-balance");
const withdrawbl = document.getElementById("withdraw-balance");
const totalbl = document.getElementById("total-balance");
const depositeField = document.getElementById("deposite-field");
const withdrawField = document.getElementById("withdraw-field");
const depositeBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

depositeBtn.addEventListener("click", function () {
  const newDepositeValueString = depositeField.value;
  const newDepositeValue = parseFloat(newDepositeValueString).toFixed(2);
  const depositAmount = Number(newDepositeValue);

  const previousDepositeTotalString = depositebl.innerText;
  const previousDepositeValue = parseFloat(previousDepositeTotalString).toFixed(
    2
  );
  const previousDepositeAmount = Number(previousDepositeValue);

  if (
    isNaN(newDepositeValueString) ||
    depositeField.value <= 0 ||
    depositeField.value == ""
  ) {
    alert("Enter Valid Number");
    depositeField.value = "";
  } else {
    const currentDepositeTotal = previousDepositeAmount + depositAmount;
    depositebl.innerText = currentDepositeTotal;
    const totalBalance = totalbl.innerText;
    const newTotalValue = parseFloat(totalBalance).toFixed(2);
    const totalAmount = Number(newTotalValue);
    const currentTotalBalance = totalAmount + depositAmount;
    totalbl.innerText = currentTotalBalance;
    depositeField.value = "";
  }
});

withdrawBtn.addEventListener("click", function () {
  const withdrawfieldString = withdrawField.value;
  const newWithdrawValue = parseFloat(withdrawfieldString).toFixed(2);
  const withdrawAmount = Number(newWithdrawValue);

  const withdrawtotalString = withdrawbl.innerText;
  const previousWithdrawValue = parseFloat(withdrawtotalString).toFixed(2);
  const previousWithdrawAmount = Number(previousWithdrawValue);

  if (
    isNaN(withdrawField.value) ||
    withdrawField.value <= 0 ||
    withdrawField.value == ""
  ) {
    alert("Enter Valid Number");
    withdrawField.value = "";
  } else {
    const totalWithdrawBalance = withdrawAmount + previousWithdrawAmount;
    withdrawbl.innerText = totalWithdrawBalance;

    const totalBalance = totalbl.innerText;
    const newTotalValue = parseFloat(totalBalance).toFixed(2);
    const totalAmount = Number(newTotalValue);

    const currentTotalBalance = totalAmount - withdrawAmount;
    totalbl.innerText = currentTotalBalance;

    //
    withdrawField.value = "";
  }
});
