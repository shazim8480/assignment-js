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
    var watchQuantity, mobileQuantity, laptopQuantity, watchBudget, mobileBudget, laptopBudget;

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
    if (stayDuration >= 1 && stayDuration <= 10) {
     return (100 * stayDuration);
  }
  else if (stayDuration >= 11 && stayDuration <= 20 ) {
    
      return ((stayDuration-10) * 80) + 1000;
  }
  else if (stayDuration >= 21) {
     return ((stayDuration-20) * 50) + 1800;
  }
  else{
      return ("Please input a valid number!")
  }
}
 
var totalHotelFee = hotelCost(22);
console.log(totalHotelFee);


// Problem-4 : Mega Friend

myFriends = ["Akram", "Zaman", "Hasibullah", "Sajid", "Sanaullah"]

myFriends.sort(function(a,b) {
    return b.length - a.length; //sorting the array from higher to lower order//
})
console.log(myFriends[0]);