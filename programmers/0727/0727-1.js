// https://school.programmers.co.kr/learn/courses/30/lessons/70128
// 멘토님 코드
// 내적
function solution(a, b) {
  const answer = a.reduce((cu, el, i) => {
    // console.log(cu,el,b[i])
    return cu + el * b[i]
  }, 0)
  // console.log(answer)
  return answer
}

// 다른사람 코드
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0)
}
