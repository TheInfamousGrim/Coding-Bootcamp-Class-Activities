function max(num){
    var maxNumber = num[0]; // 5
    for(var i = 1; i < max.length; i++){
        if(num[i] > maxNumber){ // 7 > 2
            maxNumber = num[i]; //maxNumber= 5
        }
    }
    console.log(maxNumber)
}

max([2,5,7,8])