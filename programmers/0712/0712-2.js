// https://school.programmers.co.kr/learn/courses/30/lessons/12944
// 평균 구하기

function solution(arr) {
  let sum = 0,
    avg = 0;

  for (let i = 0; i < arr.length; i++) sum += arr[i];

  return (avg = sum / arr.length);
}

// 정답 풀이
function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

// let test = [1, 2, 3, 4];
// console.log(solution(test));

// 멘토님
function solution(arr) {
  const sum = arr.reduce((cu, el) => {
    console.log(cu, el);
    return cu + el;
  }, 0);
  return sum / arr.length;
}

// arr = [1,2,3,4]
// console.log(solution(arr))
