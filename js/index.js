// Income and Expense Calculation Here

document.getElementById('calculate-button').addEventListener('click', function () {

    var incomeInput = document.getElementById('income-input');
    var incomeInputValue = incomeInput.value;
    var incomeInputAmount = parseFloat(incomeInputValue);


    var foodInput = document.getElementById('food-input');
    var foodInputValue = foodInput.value;
    var foodInputAmount = parseFloat(foodInputValue);

    var rentInput = document.getElementById('rent-input');
    var rentInputValue = rentInput.value;
    var rentInputAmount = parseFloat(rentInputValue);

    var clothInput = document.getElementById('cloth-input');
    var clothInputValue = clothInput.value;
    var clothInputAmount = parseFloat(clothInputValue);

    var totalExpense = foodInputAmount + rentInputAmount + clothInputAmount;

    const remainingBalance = incomeInputAmount - totalExpense;

    if (incomeInputAmount < totalExpense) {
        alert('Income can not be less than expense. Enter amounts properly');
        incomeInput.value = '';
        foodInput.value = '';
        rentInput.value = '';
        clothInput.value = '';
        return;
    }

    else if (incomeInputAmount < 0 || foodInputAmount < 0 || rentInputAmount < 0 || clothInputAmount < 0) {
        alert('Can not enter any number less than zero. Try again')

    }

    else if (isNaN(totalExpense) || isNaN(remainingBalance)) {
        alert('Can not enter any input other than number');

    }

    else {
        document.getElementById('total-expence').innerText = totalExpense;
        document.getElementById('remaining-balance').innerText = remainingBalance;

    }

})

// Savings Calculation Here 

document.getElementById('savings').addEventListener('click', function () {

    var incomeInput = document.getElementById('income-input');
    var incomeInputValue = incomeInput.value;
    var incomeInputAmount = parseFloat(incomeInputValue);

    var foodInput = document.getElementById('food-input');
    var foodInputValue = foodInput.value;
    var foodInputAmount = parseFloat(foodInputValue);

    var rentInput = document.getElementById('rent-input');
    var rentInputValue = rentInput.value;
    var rentInputAmount = parseFloat(rentInputValue);

    var clothInput = document.getElementById('cloth-input');
    var clothInputValue = clothInput.value;
    var clothInputAmount = parseFloat(clothInputValue);


    var totalExpense = foodInputAmount + rentInputAmount + clothInputAmount;

    const remainingBalance = incomeInputAmount - totalExpense;

    var savingsPercent = document.getElementById('savings-percent');
    var savingsPercentValue = parseFloat(savingsPercent.value);
    var savingsAmount = incomeInputAmount * (savingsPercentValue / 100);
    if (remainingBalance < savingsAmount) {
        alert('Saving amount is bigger than remaining balance. Enter valid savings percentage');
        savingsPercent.value = '';
        return;
    }


    else {
        document.getElementById('savings-amount').innerText = savingsAmount;


        var finalAmount = remainingBalance - savingsAmount;
        document.getElementById('remaining').innerText = finalAmount;

    }

})