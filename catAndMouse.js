/*
    Hackerrank link:
        https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
*/
function catAndMouse(){
    return  (Math.abs(x - z) < Math.abs(y - z)) ? "Cat A" : (Math.abs(y - z) < Math.abs(x - z)) ? "Cat B" : "Mouse C";
}