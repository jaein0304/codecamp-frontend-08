// https://school.programmers.co.kr/learn/courses/30/lessons/12950
// 행렬의 덧셈
function solution(arr1, arr2) {
  let answer = [[]]
  // a[0][0] + b[0][0]  = return[0][0]
  let sum1 = arr1.map((arr1) => arr1)
  let sum2 = arr2.map((arr2) => arr2)
  // let a= Array.from(arr1, arr2 => arr1 + arr2
  console.log(sum1)
  console.log(sum2)

  // let sum = arr1.reduce((pre, cur) => pre+cur)
}

// 멘토님 코드
function solution(arr1, arr2) {
  const answer = []
  // 1. arr1  배열의 전체 배열들을 가져오고
  for (let i = 0; i < arr1.length; i++) {
    // 2. arr1 배열에서 가져온 배열들의 안쪽 데이터들 조회
    for (let j = 0; j < arr1[i].length; j++) {
      // 3. i,j 인덱스 값으로 각각의 위치에 해당되는 데이터들의 합
      const sum = arr1[i][j] + arr2[i][j]
      // 4. 만약에 i에 해당되는 인덱스로 접근 했을 때 배열이 없을 때는 빈 배열 만듦어줌
      // console.log(sum)
      if (answer[i] === undefined) {
        answer[i] = []
      }
      // 5. i,j 인덱스 값으로 해당 위치에 데이터 삽입
      answer[i][j] = sum
    }
  }
  // console.log(answer)
  return answer
}

// 메서드 사용
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    return num1.map((num2, j) => {
      // console.log(num2, arr2[i][j])
      return num2 + arr2[i][j]
    })
  })
  console.log(answer)
  return answer
}
