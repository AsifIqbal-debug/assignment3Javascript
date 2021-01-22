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
var result=l=kilometerToMeter(16);
console.log(result);