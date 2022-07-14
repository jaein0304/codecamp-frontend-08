// https://school.programmers.co.kr/learn/courses/30/lessons/12931
// 자릿수 더하기
function solution(n) {
  //100,000,000이하의 자연수 중 자릿수  -> if(100,000,000/n > 1) 100,000,000%n 값
  //100,000,00/n > 1 -> 100,000,00% 값
  //1일때 빠져나가기
  //나머지 이용하면 될 것 같다

  let answer = 0;
  let m = String(n);

  for (let i = 0; i < m.length; i++) answer += parseInt(m[i]);
  return answer;

  //     let answer = 0;

  //     for(let i=0; i<n%10; i++) { //자연수가 10으로 나눠지는 나머지값까지? (123/10 -> 12.3 -> 3까지?)
  //         if(n>0) answer += n%10 // 자연수가 0일 때, 나머지값들을 (10) -> answer ->
  //             n /= 10;    // n으로 나눈다
  //     }

  //     return answer;

  // while(n > 0){
  //     answer += n%10;
  //     n/=10;
  // }
  // return answer;

  // let sum = 0;
  // for(let i=1; i<100,000,000; i*10)
  //     if(i*10 % n !== 0) sum = i*10%n

  //     for(let i=0; i<9; i++)
  //         if(100,000,000 % n !== 0) sum = 100,000,000 % n

  //     for(let i=0; i<n; i++)
  //         sum += i;

  //     return sum;
}

// 정답 코드
function solution(n) {
  // 쉬운방법
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}

//멘토님 코드 
function solution(n) {
  n = String(n); // 문자열로 변환
  let answer = 0;
  for (let i = 0; i < n.length; i++) {
    // console.log(n[i]) //   각각 가져오고 있음
    answer += Number(n[i]);
  }
  return answer;
}

// typeof 연산자는 피연산자의 평가 전 자료형을 나타내는 문자열을 반환합니다.
// console.log(typeof 42); // number 

//for 대체할 수 있는 메서드
function solution(n) {
  const answer = String(n)
    .split("")
    .reduce((acc, cur) => {
      return Number(acc) + Number(cur); //Number(acc + cur); 이렇게 하면 안된다 
    }, 0); //초기값 0 안넣어주면 실패 
  return answer;
}