function isPrime(number){
    let counter = 0
    if(number == 1){
        console.log("1 is neither prime nor composite")
    }
    else if(number == 2){
        console.log("Yes")
    }
    else{
        for(let i = 2; i < number; i++){
            if(number % i == 0){
                counter += 1
            }
        }
        if(counter == 0){
            console.log("Yes")
        }
        else{
            console.log("No")
        }
    }
}

isPrime(9)