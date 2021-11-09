/*
    Hackerrank: https://www.hackerrank.com/challenges/counting-valleys/
*/

function countingValleys(steps,path){
    let valleys = 0;
    let level = 0;
        for (let i = 0; i < steps; i++) {
            if(path.charAt(i) == 'U'){
                level++;
                if (level == 0){
                    valleys++;
                }
            }
            else
                level--;
        }
        return valleys;
}
let path = "UDDDUDUU"
let steps = 8
console.log(countingValleys(steps,path))