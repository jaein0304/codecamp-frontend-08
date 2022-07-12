// https://school.programmers.co.kr/learn/courses/30/lessons/12944
// 평균 구하기 

function solution(arr) {
    let sum = 0, avg = 0;
    
   for(let i=0; i<arr.length; i++) 
       sum += arr[i]
   
    avg = sum / arr.length
    return avg;
}

