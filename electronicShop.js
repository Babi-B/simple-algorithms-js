/*
    Hackerrank challenge:
                    https://www.hackerrank.com/challenges/electronics-shop/problem?h_r=internal-search
 */
function getMoneySpent(keyboards, drives, b){
    let cost = 0
    keyboards.forEach(keyboard =>{
        drives.forEach(drive =>{
            if (keyboard + drive <= b && keyboard + drive > cost){
                cost =  keyboard + drive;
             }
        })
    })
    if (cost != 0) {
        console.log(cost);
        return cost;
    }
    console.log(cost);
    return -1;
}

let b = 60
let keyboards = [40,60,50]
let drives = [5,8,12]

getMoneySpent(keyboards, drives, b)