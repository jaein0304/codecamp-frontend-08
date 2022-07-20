// https://school.programmers.co.kr/learn/courses/30/lessons/12943
// 콜라츠 추측
function solution(num) {
  let answer
  for (let i = 1; i < 500; i++) {
    if (num != 1) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1
    } else return (answer = i - 1)
  }
  return -1
}

// 중첩 삼항
function solution(num) {
  let answer, a
  for (let i = 1; i < 500; i++) {
    return num != 1 ? (num = num % 2 === 0 ? num / 2 : num * 3 + 1) : (answer = i - 1)
  }
  return -1
}
