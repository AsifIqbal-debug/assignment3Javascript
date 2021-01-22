//Problem One(Convert Kilometer to meter problem )

function kilometerToMeter(km)
{
    if(km<0){
        return 'Input cannot  be a negetive number';
    }
    else{
      var meter=(km*1000);
      return meter;
    }
}
// var result=kilometerToMeter(-1);
// console.log(result);


//Problem Number Two (Budget Calculator Problem) 

function budgetCalculator(watch,phone,laptop)
{
    if(watch<0||phone<0||laptop<0)
    {
        return 'Input cannot  be a negetive number';
    }
    else{
        var watchCost=watch*50;
        var phoneCost=phone*100;
        var laptopCost=laptop*500;
        var totalCost=watchCost+phoneCost+laptopCost;
        return totalCost;
    }

}
// var budget=budgetCalculator(3,5,6);
// console.log(budget);

//Problem number Three (Hotel Cost)
function hotelCost(day)
{
    var totalHotelCost;
    if(day<1)
    {
        return 'You must be book in a day';
    }
    else if(day<=10)
    {
        totalHotelCost=day*100;
        return totalHotelCost;
    }
    else if(day<=20)
    {
        var firstPackCost=10*100;
        var remaining=day-10;
        var secondPackCost=remaining*80;
        totalHotelCost=firstPackCost+secondPackCost;
        return totalHotelCost;
    }
    else{
        var firstPackCost=10*100;
        var secondPackCost=10*80;
        var remaining=day-20;
        var thirdPackCost=remaining*50;
        totalHotelCost=firstTendayCost+secondPackCost+thirdPackCost;
        return totalHotelCost;
    }
}
// var asif=hotelCost(-1);
// console.log(asif);


//Problem number Four (LongestString)


function megaFriend(friend){
    if(!Array.isArray(friend)){
        return 'Value must be an array of names!';
    }

    if(friend.length === 0) {
        return 'Array can not be empty!'
    }

    var longestName;
    var longestNameLength = 0;

    for (var i = 0; i < friend.length; i++) {
        if(typeof(friend[i]) !== 'string') {
            return 'Every element must be a type of string!'
        }
        else {
            if (friend[i].length > longestNameLength) {
                longestNameLength = friend[i].length;
                longestName = friend[i];
            }
        }
    }

    return longestName;
}
// var str=["Bullu","Mallu","KalluAllu","Alluuu"];
// var rar=megaFriend(str);
// console.log(rar);