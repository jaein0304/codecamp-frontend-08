// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// 완주하지 못한 선수

// 배열 메서드 arr.splice()
// splice() 제거하고 싶은 배열의 데이터를 구간부터 제거 / 추가
// 원본 값에 영향을 줌

// 사용 예시
const arr = [1, 2, 3, 4]
arr.splice(1, 1)
arr.splice(1, 0, 5)
console.log(arr)

// 멘토님 코드
// 안 쪽에서 여러개의 메서드를 사용하다보니, 효율성x
function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    if (participant.includes(completion[i])) {
      // console.log(completion[i])
      participant.splice(participant.indexOf(completion[i]), 1)
    }
  }
  console.log(participant) // 완주하지 못한 선수
  return participant[0]
}

// 효율성 통과
function solution(participant, completion) {
  // 숫자로 입력할 때 a,b=> a-b 이런식으로 정렬, 문자열은 인자를 넣지 않아도 오름차순으로 정렬
  participant.sort()
  completion.sort()
  // console.log(participant, completion)

  for (let i = 0; i < participant.length; i++) {
    // console.log(participant[i], completion[i])
    if (participant[i] !== completion[i]) return participant[i]
  }
}

// 메서드
function solution(participant, completion) {
  participant.sort()
  completion.sort()

  const answer = participant.filter((name, i) => {
    // console.log(name, completion[i])
    return name !== completion[i]
  })
  // console.log(answer)
  return answer[0]
}
