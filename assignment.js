// Problem-1 : Kilometer to Meter//

function kilometerToMeter(kilometer) {

    var kilometerInput = kilometer;

    if (kilometerInput >= 0) {
        return meter = (kilometerInput * 1000);
    } else {
        return ("Please input a valid number!")
    }
}

var result = kilometerToMeter(100);
console.log(result);

// Problem-2 : Budget Calculator //

var watchPrice = 50;
var mobilePrice = 100;
var laptopPrice = 500;

function budgetCalculator(watch, mobile, laptop) {
    var watchQuantity, mobileQuantity, laptopQuantity, watchBudget, mobileBudget, laptopBudget, totalPrice;

    watchQuantity = watch;
    mobileQuantity = mobile;
    laptopQuantity = laptop;

    if (watchPrice >= 0 && mobilePrice >= 0 && laptopPrice >= 0) {
        watchBudget = watchQuantity * watchPrice;
        mobileBudget = mobileQuantity * mobilePrice;
        laptopBudget = laptopQuantity * laptopPrice;
    } else {
        return ("Please input a valid number!")
    }

    return totalPrice = watchBudget + mobileBudget + laptopBudget;

}

var totalBudget = budgetCalculator(1, 10, 3);
console.log(totalBudget);

// Problem-3 : Hotel Cost //

function hotelCost(stayDuration) {
    var firstTenDays, secondTenDays, finalDays, hotelFeeFirstTenDays, hotelFeeSecondTenDays, hotelFeeFinalDays, totalDays;

    totalDays = stayDuration;

    if ((firstTenDays >= 1 && firstTenDays <= 10) && (secondTenDays >= 11 && secondTenDays <= 20) && (finalDays >= 21)) {

        hotelFeeFirstTenDays = 100;
        hotelFeeSecondTenDays = 80;
        hotelFeeFinalDays = 50;
    } else {
        return ("Please input a valid number!")
    }

    return hotelBudget = hotelFeeFirstTenDays + hotelFeeSecondTenDays + hotelFeeFinalDays;
}

var totalHotelFee = hotelCost(40);
console.log(totalHotelFee);