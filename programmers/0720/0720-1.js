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

// 멘토님 코드
function solution(num) {
  let answer = 0
  const result = new Array(500).fill(1).forEach((el) => {
    if (num !== 1) {
      num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1)
      answer++
      // console.log(answer, num)
    }
  })
  console.log(answer)
}

// forEach는 중간에 멈출 수가 없음, 이번에는 메서드보다는 중간에 멈출 수 있는 for문이 더 효율적
