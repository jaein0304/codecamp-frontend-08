// https://school.programmers.co.kr/learn/courses/30/lessons/12947
// 하샤드 수

// 멘토님 코드
function solution(x) {
  let answer = 0
  x = String(x)
  for (let i = 0; i < x.length; i++) {
    // console.log(i, x[i])
    answer += Number(x[i])
  }
  // console.log(answer)
  return x % answer === 0 ? true : false
}

// 메서드
function solution(x) {
  const answer = String(x)
    .split("")
    .reduce((acc, cur) => {
      // console.log(typeof acc, typeof cur) //타입확인, string 값으로 받아오고 있음, Number로 변환
      return acc + Number(cur)
    }, 0)
  // console.log(answer)
  return x % answer === 0
}
