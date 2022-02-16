document.getElementById('calculate-button').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodAmount = foodInput.value;
    // console.log(incomeAmount);
    // get current income
    const totalExpence = document.getElementById('total-expence');
    const totalExpenceText = totalExpence.innerText;
    totalExpence.innerText = foodAmount;
    // console.log(totalExpenceText);
    // clear input field
    foodInput.value = '';
    // get current rent
    const rentInput = document.getElementById('rent-input');
    const rentAmount = rentInput.value;
    const totalExp = document.getElementById('total-expence');
    const totalExpText = totalExp.innerText;
    totalExp.innerText = rentAmount;
    // console.log(totalExpText);
    // clear input field
    rentInput.value = '';
    // get current cloth
    const clothInput = document.getElementById('cloth-input');
    const clothAmount = clothInput.value;
    const totalExpe = document.getElementById('total-expence');
    const totalExpeText = totalExpe.innerText;
    totalExp.innerText = clothAmount;
    // console.log(totalExpeText);
    const totalCalculation = parseFloat(totalExpeText) + parseFloat(totalExpText) + parseFloat(totalExpeText);
    console.log(totalCalculation);

})
