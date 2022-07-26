// https://school.programmers.co.kr/learn/courses/30/lessons/12947
// 숫자 문자열과 영단어
function solution(s) {
  const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
  // const words = console.log(s.split(''))
  // const result = s.filter(word => word.length > 3)
  // console.log(result);
  let result = 0
  for (let i = 0; i < numbers.length; i++) {
    result = s.split(numbers[i - 1])
    s = result.join(i)
  }
  return Number(s)
}
