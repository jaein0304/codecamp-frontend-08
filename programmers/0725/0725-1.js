// https://school.programmers.co.kr/learn/courses/30/lessons/12934
// 정수 제곱근 판별

function solution(n) {
  let num = Math.sqrt(n)
  if (num % 1 === 0) return (num + 1) * (num + 1)
  else return -1
}

// 멘토님 코드
function solution(n) {
  let answer = -1

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) return (i + 1) ** 2
  }
  return answer
}

// 메서드
function solution(n) {
  let sqrt = Math.sqrt(n)
  if (Number.isInteger(sqrt)) {
    // return (sqrt + 1) ** 2
    return Math.pow(sqrt + 1, 2)
  } else {
    return -1
  }
}
