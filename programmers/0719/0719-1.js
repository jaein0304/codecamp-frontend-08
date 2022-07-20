// https://school.programmers.co.kr/learn/courses/30/lessons/12932
// 자연수 뒤집어 배열로 만들기

function solution(n) {
  const answer = []

  n = n.toString()
  console.log(typeof n)

  for (let i = n.length - 1; i >= 0; i--) answer.push(Number(n[i]))

  return answer
}

// 메서드 변경
function solution(n) {
  const answer = []

  n = n.toString()
  console.log(typeof n)

  for (let i = 0; i < n.length; i++) answer.push(Number(n[i]))

  answer.reverse()
  return answer
}

// 메서드 (다시해야댐)
function solution(n) {
  const answer = n
    .toString()
    .split("")
    .map((num) => {
      // console.log(num)
      return Number(num)
    })
  return answer
}
