// https://school.programmers.co.kr/learn/courses/30/lessons/12926
// 시저 암호

// 멘토님 코드
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// 소문자 : 0 - 25
// 대문자 : 26 - alphabet.length - 1
function solution(s, n) {
  var answer = ""

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") answer += s[i] // ' '
    else {
      let idx = alphabet.indexOf(s[i])
      const word = idx > 25 ? alphabet.substring(26) : alphabet.substring(0, 26) // 대문자
      idx = word.indexOf(s[i]) + n
      if (word[idx] === undefined) idx -= 26
      // console.log(s[i], word, idx)
      answer += word[idx]
    }
  }
  return answer
}

// 대문자 소문자 나눠서 처리하는 방법
const lower = "abcdefghijklmnopqrstuvwxyz"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function solution(s, n) {
  let answer = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i]
    } else {
      const word = lower.includes(s[i]) ? lower : upper
      let idx = word.indexOf(s[i]) + n
      if (word[idx] === undefined) {
        idx -= 26
      }
      // console.log(s[i], idx)
      answer += word[idx]
    }
  }
  return answer
}

// 메서드, reduce 사용
const lower = "abcdefghijklmnopqrstuvwxyz"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function solution(s, n) {
  const answer = s.split("").reduce((acc, cur) => {
    // console.log(acc,cur)
    const word = lower.includes(cur) ? lower : upper
    let idx = word.indexOf(cur) + n

    // console.log(cur, idx, word)
    if (idx >= 26) {
      idx -= 26
    }
    return acc + (cur === " " ? " " : word[idx])
  }, "")
  return answer
}

// 아스키코드 사용
const lower = "abcdefghijklmnopqrstuvwxyz"
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function solution(s, n) {
  let answer = ""

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") answer += s[i]
    else {
      let idx = s[i].charCodeAt() + n
      // console.log(s[i], idx, String.fromCharCode(idx))
      if (idx > 122 || (idx > 90 && idx - n < 97)) {
        idx -= 26
      }
      answer += String.fromCharCode(idx)
    }
  }
  return answer
}
