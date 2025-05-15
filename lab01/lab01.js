"use strict";
let PhoneNum = [6, 5, 3, 2, 8, 4, 7, 3, 8, 0];
function CreatePhoneNum(PhoneNum) {
    console.log(`(${PhoneNum[0]}${PhoneNum[1]}${PhoneNum[2]}) ${PhoneNum[3]}${PhoneNum[4]}${PhoneNum[5]}-${PhoneNum[6]}${PhoneNum[7]}${PhoneNum[8]}${PhoneNum[9]}`);
}
CreatePhoneNum(PhoneNum);
//
class Challenge {
    static solution(number) {
        let sum = 0;
        if (number < 0) {
            return sum;
        }
        else {
            for (let i = 0; i < number; i++) {
                if (i % 3 == 0 || i % 5 == 0) {
                    sum += i;
                }
            }
            return sum;
        }
    }
}
let challenge = new Challenge();
console.log(Challenge.solution(10));
//
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let numsA = [];
let numsB = [];
for (let i = 0; i < (nums.length - k); i++) { //первые числа
    numsA[i] = nums[i];
}
for (let i = 0; i < nums.length - k - 1; i++) { //вторые числа
    numsB[i] = nums[i + k + 1];
}
let result = numsB.concat(numsA);
console.log(result);
//
let nums1 = [1, 2, 3];
let nums2 = [4, 8, 9];
let array = nums1.concat(nums2);
let middleArray = [];
console.log(array);
let a = array.length / 2;
array.sort();
if (array.length % 2 == 0) {
    middleArray[0] = array[a - 1];
    middleArray[1] = array[a];
}
else {
    a -= 0.5;
    middleArray[0] = array[a];
}
let sumMid = 0;
for (let i = 0; i < middleArray.length; i++) {
    sumMid += middleArray[i];
}
sumMid = sumMid / 2;
console.log(sumMid);
