// https://school.programmers.co.kr/learn/courses/30/lessons/12945
// 피보나치 수
function f(n) {
  let fNum = [0, 1] // F(0) = 0, F(1) = 1
  for (let i = 2; i <= n; i++) {
    fNum[i] = (fNum[i - 1] + fNum[i - 2]) % 1234567
  }
  return fNum[n]
}

function solution(n) {
  const answer = f(n) % 1234567
  return answer
}
