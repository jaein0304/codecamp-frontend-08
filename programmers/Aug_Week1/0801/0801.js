// https://school.programmers.co.kr/learn/courses/30/lessons/12901?language=javascript
// 2016년
function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const today = new Date()
  // today.setFullYear(2016,00,01);
  // const temp = today.getDay()
  // console.log(temp)

  today.setFullYear(2016, a - 1, b) // month는 -1 해줘야함..!
  const temp = today.getDay()
  console.log(temp)

  result = week[temp]

  return result
}

// 멘토님 코드
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
}
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
function solution(a, b) {
  let answer = 0
  for (let i = 1; i < a; i++) {
    // console.log(i, month[i])
    answer += month[i]
  }
  answer += b - 1
  // console.log(answer)
  return week[answer % 7]
}

// 메서드
function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
  const answer = new Date(2016, a - 1, b).getDay()
  return week[answer]
}
