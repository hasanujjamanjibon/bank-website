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
  const newDepositeValue = parseFloat(newDepositeValueString);
  //
  const previousDepositeTotalString = depositebl.innerText;
  const previousDepositeValue = parseFloat(previousDepositeTotalString);
  //
  const currentDepositeTotal = previousDepositeValue + newDepositeValue;
  //
  depositebl.innerText = currentDepositeTotal;
  //
  const totalBalance = totalbl.innerText;
  const newTotalValue = parseFloat(totalBalance);
  const currentTotalBalance = newTotalValue + newDepositeValue;
  totalbl.innerText = currentTotalBalance;
  depositeField.value = "";
});

withdrawBtn.addEventListener("click", function () {
  const withdrawfieldString = withdrawField.value;
  const newWithdrawValue = parseFloat(withdrawfieldString);
  //
  const withdrawtotalString = withdrawbl.innerText;
  const previousWithdrawValue = parseFloat(withdrawtotalString);
  //
  const totalWithdrawBalance = newWithdrawValue + previousWithdrawValue;
  withdrawbl.innerText = totalWithdrawBalance;
  //
  const totalBalance = totalbl.innerText;
  const newTotalValue = parseFloat(totalBalance);
  const currentTotalBalance = newTotalValue - newWithdrawValue;
  totalbl.innerText = currentTotalBalance;

  //
  withdrawField.value = "";
});
