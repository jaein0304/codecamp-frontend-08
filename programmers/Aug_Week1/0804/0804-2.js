// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// 모의고사

// 1번 수포자 : 1~5
// 2번 수포자 : 2[1~5]
// 3번 수포자 : 33 11 22 44 55
const answerTable = [
  [1, 2, 3, 4, 5], // 1번 수포자
  [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 3번 수포자
]
function solution(answers) {
  // 학생들의 점수를 저장하는 배열
  const score = [0, 0, 0]
  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < answerTable.length; j++) {
      if (answerTable[j][i % answerTable[j].length] === answers[i]) {
        score[j]++
      }
    }
  }
  // 제일 많이 맞춘 문제의 수
  const biggest = Math.max(...score)
  // console.log(score, biggest)
  const answer = []

  for (let i = 0; i < score.length; i++) {
    console.log(biggest, score[i])
    if (score[i] === biggest) {
      return answer.push(i + 1)
    }
  }
  return answer
}

// 메서드
const answerTable = [
  [1, 2, 3, 4, 5], // 1번 수포자 패턴
  [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 3번 수포자
]
function solution(answers) {
  const scoreList = answerTable.map((el, i) => {
    const score = answers.reduce((acc, cur, j) => {
      return acc + (el[j % el.length] === cur ? 1 : 0)
    }, 0)
    console.log(score)
    return { student: i + 1, score }
  })
  console.log(scoreList)

  // 가장 많이 맞춘 문제의 수
  const biggest = Math.max(...scoreList.map((el) => el.score))
  const answer = scoreList
    .filter((el) => {
      // console.log(el.score, biggest)
      return el.score === biggest
    })
    .map((el) => el.student)
  // console.log(answer)
  return answer
}

// 포문이 더 가독성있음
