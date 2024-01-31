function computeSum(n){
    let sum = 0 

    for(let i = 0  ; i < n ; i++){
        if (i%3==0  || i%5==0 || i%7==0){
            sum = sum + i
        }
    }
    return sum
   
}
computeSum(11) // sortie 40