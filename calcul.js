// la somme des entiers 

function calc(arr , n1, n2){

    let sum = 0
    if (n1 > n2 || n1 > arr.length || n2 > arr.length ){
        console.error("Cette saisie de nombre ou du tableau est incorrecte")
        return null
    }

    for(let i=0 ; i<arr.length ; i++){
        if (i >= n1 && n1 <= n2 && i <=n2){
            sum = sum +i
        }
    }
    return sum

}
calc([1,2,3,4,3,9,2,78,3,23,23,12], 2,9); 