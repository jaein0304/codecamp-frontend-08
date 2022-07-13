// https://school.programmers.co.kr/learn/courses/30/lessons/12903
// 가운데 글자 가져오기

function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.length - (1 % 2) === 0)
      // 짝수
      return (answer = s[s.length / 2]);
    else return (answer = s[s.length]);
  }
  //return answer;
}

//실패
function solution(s) {
  for (let i = 0; i < s.length; i++) {
    return s.length % 2 === 0 ? s[s.length] + s[s.length + 1] : s[s.length];
  }
}

//정답 코드
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

//멘토님 코드
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    const center = Math.floor(s.length / 2);
    answer = s[center];
    if (s.length % 2 === 0) {
      answer = s[center - 1] + answer;
    } else answer;
  }
  return answer;
}

//멘토님 코드2
function solution(s) {
  const center = Math.floor(s.length / 2);
  const answer = s.length % 2 !== 0 ? s[center] : s.slice(center - 1, center);
  return answer;
}
