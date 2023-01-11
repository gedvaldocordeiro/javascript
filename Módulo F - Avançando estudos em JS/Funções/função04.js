/*function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(8))*/

//Recursividade
function fat01(n1){
    if(n1 == 1){
        return 1
    } else {
        return n1 * fat01(n1 - 1)
    }
}

console.log(fat01(8))

/*
Fatorial
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/