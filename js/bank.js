function getInputValue(inputId) {
    const foodInput = document.getElementById(inputId);
    const foodAmount = foodInput.value;
    return foodAmount;
}
document.getElementById('calculate-button').addEventListener('click', function () {
    const foodAmount = getInputValue('food-input');
    // get current food
    const totalExpence = document.getElementById('total-expence');
    totalExpence.innerText = foodAmount;
    // get current rent
    const rentAmount = getInputValue('rent-input');
    const totalExp = document.getElementById('total-expence');
    totalExp.innerText = rentAmount;
    // get current cloth
    const clothAmount = getInputValue('cloth-input');
    const totalExpe = document.getElementById('total-expence');
    totalExpe.innerText = clothAmount;
    // console.log(totalExpeText);
    let totalCalculation = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothAmount);
    totalExpe.innerText = totalCalculation;
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = incomeInput.value;
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = incomeAmount;
    totalCalculation = incomeAmount - totalCalculation;
    totalBalance.innerText = totalCalculation;
});
const discountAmount = 20;
document.getElementById('save-btn').addEventListener('click', function () {
    const code = document.getElementById('save-amount').value;
    if (code == discountAmount) {
        const total = document.getElementById('save-price');
        const savingAmount = (10000 * 20) / 100;
        total.innerText = savingAmount;
        const balanceTotal = document.getElementById('remain-balance');
        const remainingBalance = balanceTotal.innerText;
        console.log(remainingBalance);
    }
    else {
        console.log('please give 20% amount');
    }
    // const Balance = document.getElementById('remain-balance');
    // const remainingBalance = totalCalculation - savingAmount;
    // Balance.innerText = remainingBalance;
});
