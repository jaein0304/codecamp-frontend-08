// https://school.programmers.co.kr/learn/courses/30/lessons/68644
// 두 개 뽑아서 더하기
function solution(numbers) {
  const answer = []

  for (let i = 0; i < numbers.length; i++) {
    // console.log(i, numbers[i])
    for (let j = i + 1; j < numbers.length; j++) {
      // console.log(numbers[i], numbers[j])
      const sum = numbers[i] + numbers[j]

      console.log(sum, answer, answer.includes(sum))
      if (answer.includes(sum) === false) {
        answer.push(sum)
      }
    }
  }
  // console.log(answer)
  return answer.sort((a, b) => a - b)
}

// set
// 1. 배열처럼 사용할 수 있는 객체
// 2. 고유한 데이터만 저장
const arr1 = new Set()
const arr2 = []
typeof arr1
typeof arr2
// 배열은 객체를 기준으로 가져온 자료구조 이므로 배열인지 객체인지 알고싶다면
Array.isArray(arr1) // 배열인지 아닌지 확인, 배열이 아니다
Array.isArray(arr2)

// arr1.push()  // 배열이 아니므로 사용 못함
// set 에서는 add
arr1.add("a")
arr1.add("a")
arr1.add("a") // 중복을 자동으로 제거함
// 데이터 추가
arr2.push("a")
arr2.push("a")

// set 사용
function solution(numbers) {
  const answer = new Set()

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j]

      if (answer.has(sum) === false) {
        answer.add(sum)
      }
    }
  }
  return Array.from(answer).sort((a, b) => a - b)
}

// set 사용2
function solution(numbers) {
  const answer = new Set()

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j]

      answer.add(sum)
    }
  }
  return Array.from(answer).sort((a, b) => a - b)
}

// 메서드
function solution(numbers) {
  const answer = []

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1).forEach((num2) => {
      // console.log(num1, num2)
      const sum = num1 + num2

      if (answer.includes(sum) === false) {
        answer.push(sum)
      }
    })
    // console.log(num1, i, numbers.slice(i + 1))
  })
  // console.log(answer)
  return answer.sort((a, b) => a - b)
}

// 메서드 + set
function solution(numbers) {
  const answer = new Set()

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1).forEach((num2) => {
      const sum = num1 + num2

      answer.add(sum)
    })
  })
  return [...answer].sort((a, b) => a - b)
}

// 배열에서 길이 값을 측정할 수 있는 것 : length
// set에서는 size 이용
