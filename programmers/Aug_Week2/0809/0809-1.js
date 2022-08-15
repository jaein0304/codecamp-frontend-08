// https://school.programmers.co.kr/learn/courses/30/lessons/81301
// 숫자 문자열과 영단어
function solution(s) {
  const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  // const words = console.log(s.split(''))
  // const result = s.filter(word => word.length > 3)
  // console.log(result);
  let result = 0
  for (let i = 0; i < numbers.length; i++) {
    result = s.split(numbers[i])
    s = result.join(i)
    console.log(s)
    console.log(result)
  }
  return Number(s)
}

// replace
let str = "abc"

str = str.replace("a", 1) // 원본 변경 안하므로 재할당
str
//
