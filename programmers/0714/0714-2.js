// https://school.programmers.co.kr/learn/courses/30/lessons/12954
// x만큼 간격이 있는 n개의 숫자

//정답 코드
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}


// 멘토님 코드 
function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    // i가 0으로 둔다면 0으로 return되니까 2의 배수가 아니게 된다
    answer.push(i * x);
  }
  return answer; //console.log(x,n)
} 

// map 사용
function solution(x, n) {
  const answer = new Array(n).fill(1).map((num, i) => {
    return (num + i) * x;
  });
  return answer; // console.log(answer)
}

// 중괄호 생략 
function solution(x, n) {
const answer = new Array(n).fill(1).map((num,i) => (num + i) * x)
return answer;// console.log(answer)
}