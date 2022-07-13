// https://school.programmers.co.kr/learn/courses/30/lessons/12928
// 약수의 합 

function solution(n) {
  let answer = 0;
  return answer;
}

//멘토님 코드 
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) { //i가 n을 포함할 때까지
    // console.log(i)
    //나누어 떨어지는 것들 -> 나머지가 없는 것
    //console.log(n%i) // 0만 남는 것들 (약수)
    if (n % i === 0) answer += i; //console.log(i)
  }
  return answer;
}

//
function solution(n) {
    let answer = n;
    
    for(let i=1; i<=n/2; i++) 
        if(n%i===0) answer += i
    
     return answer;
}

//메서드 
function solution(n) {
  const answer = new Array(n).fill(1).reduce((cu, el, i) => {
    let num = el + i; //el은 무조건 1만 가져옴
    return n % num === 0 ? cu + num : cu;
  }, 0); // current 약자 , element 약자, index 약자

  return answer;
  console.log(answer);
}