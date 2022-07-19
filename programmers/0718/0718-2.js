// https://school.programmers.co.kr/learn/courses/30/lessons/12930
// 이상한 숫자 만들기
// 짝수 -> 대문자, 홀수 -> 소문자, 공백포함
function solution(s) {
  let answer = ""

  // 문자열의 길이 구하고, 문자열의 자리가 짞수면 대문자
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0 && s.charCodeAt(s[i]) < 97)
      // 짝수일때, 대문자면 소문자
      answer = s.toLowerCase(s[i])
    else if (i % 2 == 1 && s.charCodeAt(s[i]) > 97)
      // 홀수일때, 소문자면 대문자
      answer = s.toUpperCase(s[i])
  }
  return answer
}
