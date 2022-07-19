// https://school.programmers.co.kr/learn/courses/30/lessons/12910
// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  const answer = []
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i], arr[i]%divisor)
    if (arr[i] % divisor === 0) answer.push(arr[i])
  }
  // console.log(answer)
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b)
}

// 메서드
function solution(arr, divisor) {
  const answer = arr.filter((num) => {
    // console.log(num)
    return num % divisor === 0
  })
  // console.log(answer)
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b)
}
