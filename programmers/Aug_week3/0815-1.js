// https://school.programmers.co.kr/learn/courses/30/lessons/12982#
// 예산

// 정답률 47.8%
// d.sort((a,b) => a-b) 추가하면 통과
function solution(d, budget) {
  let answer = 0

  d.reduce((acc, cur) => {
    let sum = acc + cur
    if (budget >= sum) answer++
    return sum
  }, 0)

  return answer
}

// 멘토님 코드
// for문 (0.24ms)
function solution(d, budget) {
  d.sort((a, b) => a - b)

  let sum = 0 // 부서들이 신청한 금액의 합
  let answer = 0
  for (let i = 0; i < d.length; i++) {
    // console.log(d[i])
    sum += d[i]
    if (sum <= budget) {
      answer++
    }
  }
  // console.log(answer)
  return answer
}

// while문 (8.13ms)
function solution(d, budget) {
  d.sort((a, b) => a - b)
  let answer = 0

  while (budget - d[answer] >= 0) {
    budget -= d[answer]
    console.log(budget, d[answer], answer)
    answer++
  }
  return answer
}

// 메서드 (0.13ms)
function solution(d, budget) {
  const answer = d
    .sort((a, b) => a - b)
    .filter((money) => {
      budget -= money
      // console.log(budget, money)
      // if(budget >=0) return money
      return budget >= 0
    })
  // console.log(answer)
  return answer.length
}
