
// Get Value of Income

function getIncomeAmount() {
    let incomeInput = document.getElementById('income-input');
    let incomeInputValue = incomeInput.value;
    let incomeInputAmount = parseFloat(incomeInputValue);

    if (incomeInputAmount < 0) {
        alert('Can not enter any number less than zero. Try again');
    }

    return incomeInputAmount;
}

//  Get Value of Expense

function getInputValues() {

    let foodInput = document.getElementById('food-input');
    let foodInputValue = foodInput.value;
    let foodInputAmount = parseFloat(foodInputValue);

    let rentInput = document.getElementById('rent-input');
    let rentInputValue = rentInput.value;
    let rentInputAmount = parseFloat(rentInputValue);

    let clothInput = document.getElementById('cloth-input');
    let clothInputValue = clothInput.value;
    let clothInputAmount = parseFloat(clothInputValue);

    const totalExpense = parseFloat(foodInputValue) + parseFloat(rentInputValue) + parseFloat(clothInputValue);

    if (foodInputAmount < 0 || rentInputAmount < 0 || clothInputAmount < 0) {
        alert('Can not enter any number less than zero. Try again');
        return;

    }


    return totalExpense;

}

// Income and Expense Difference Calculation Here

document.getElementById('calculate-button').addEventListener('click', function () {

    const spend = getInputValues();

    const earning = getIncomeAmount();


    const remainingBalance = earning - spend;



    if (earning < spend) {
        alert('Income can not be less than expense. Enter amounts properly');
        return;
    }

    else if (isNaN(earning) || isNaN(spend) || typeof earning == undefined || typeof spend == undefined) {
        alert('Can not enter any input other than positive number');
        return;

    }

    document.getElementById('total-expence').innerText = spend;
    document.getElementById('remaining-balance').innerText = remainingBalance;

})

// Savings Calculation Here 

document.getElementById('savings').addEventListener('click', function () {



    const spend = getInputValues();

    const earning = getIncomeAmount();


    const remainingBalance = earning - spend;

    const savingsPercent = document.getElementById('savings-percent');
    const savingsPercentValue = parseFloat(savingsPercent.value);
    const savingsAmount = earning * (savingsPercentValue / 100);
    const finalAmount = remainingBalance - savingsAmount;

    if (savingsPercentValue < 0) {
        alert('Enter Valid Percentage');
        return;
    }


    else if (remainingBalance < savingsAmount) {
        alert('Saving amount is bigger than remaining balance. Enter valid savings percentage');
        savingsPercent.value = '';
        return;
    }
    else if (isNaN(finalAmount)) {
        alert('Enter positive percentage value');
        return;

    }

    else {


        document.getElementById('savings-amount').innerText = savingsAmount;




        // console.log(finalAmount);
        document.getElementById('remaining').innerText = finalAmount;



    }

})