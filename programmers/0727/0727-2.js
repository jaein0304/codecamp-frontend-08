// https://school.programmers.co.kr/learn/courses/30/lessons/12935
// 멘토님 코드
// 제일 작은 수 제거하기
function solution(arr) {
  const answer = []

  // 1. 제일 작은 수 찾기
  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]) // 요소 1개씩들 다 가져와서 최소값이랑 비교 작을 경우, min
    if (arr[i] < min) min = arr[i]
  }
  // console.log(min)

  // 2. 제일 작은 수 제외한 숫자만 배열에 추가
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) answer.push(arr[i])
  }
  // console.log(answer)
  // 3. 빈배열이면 -1
  return answer.length === 0 ? [-1] : answer
}

// 메서드 사용하기
function solution(arr) {
  // 들어오는 인자 중에 가장 작은 수를 찾아주는 메서드
  const min = Math.min(...arr)
  const answer = arr.filter((num) => {
    // console.log(num)
    return num !== min
  })
  // console.log(answer)
  return answer.length === 0 ? [-1] : answer
}

// 다른사람 코드
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1)
  if (arr.length < 1) return [-1]
  return arr
}
