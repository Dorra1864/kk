//Solving problems :
//Exercise1 :
function operetor(x,y){
    if(x<y){
        return x
    }
    else{
        return x%y
    }   
}
//Exercice2:
function arr(n){
    for(var i=0;i< n.length-1;i++){
        if(typeof n[i] == 'number'){
            return n[0]
        }
        else{
            return undefined
        }
    } 
}
//Exercice3:
function sum(number) {
    let sum = 0;
    for ( i = 1; i <= number; i++) {
        sum = sum + i;
    }
    return sum;
}
//Exercice4:
function arr(number){
    var min=number[0]
    var max=0
    for (i=0;i< number.length; i++){
        if (number[i]>max){
          max=number[i]
        }
       if (number[i]<min){
        min=number[i]
       }
       return [min,max]
    }
}
//Exercice5:
function absolut(number){
    if (number<0){
        return number*(-1)
    }
    else{
        return number
    }
}
//Exercice6:
function arr(array1,array2){
    var min=array1[0]
    var max=0
    var min1=array2[0]
    var max1=0

    for (var i=0;i< array1.length; i++){
        if (array1[i]>max){
          max=array1[i]
        }
       if (array1[i]<min){
        min=array1[i]
       }
       return [min,max]
    }
    for(var j=0;j<array2.length;j++){
        if(array2[j]>max1){
            max1=array2[j]
        }
        if (array2[j]<min1){
            min1=array2[j]
        }
        
    }
        if (min>min1 && max<max1){
            return true
        }
        else{
            return false
        }
    }


//Exercice7:
function integer(number){
    return String(num).length
}
//Exercice8:
function arguments(caractere,str){

}
