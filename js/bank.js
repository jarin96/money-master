document.getElementById('calculate-button').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodAmount = foodInput.value;
    // console.log(incomeAmount);
    // get current income
    const totalExpence = document.getElementById('total-expence');
    totalExpence.innerText = foodAmount;
    // console.log(totalExpenceText);
    // clear input field
    foodInput.value = '';
    // get current rent
    const rentInput = document.getElementById('rent-input');
    const rentAmount = rentInput.value;
    const totalExp = document.getElementById('total-expence');
    totalExp.innerText = rentAmount;
    // console.log(totalExpText);
    // clear input field
    rentInput.value = '';
    // get current cloth
    const clothInput = document.getElementById('cloth-input');
    const clothAmount = clothInput.value;
    const totalExpe = document.getElementById('total-expence');
    totalExpe.innerText = clothAmount;
    // clear input field
    clothInput.value = '';
    // console.log(totalExpeText);
    let totalCalculation = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothAmount);
    totalExpe.innerText = totalCalculation;
    const incomeInput = document.getElementById('income-input');
    const incomeAmount = incomeInput.value;
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = incomeAmount;
    totalCalculation = incomeAmount - totalCalculation;
    totalBalance.innerText = totalCalculation;
})
