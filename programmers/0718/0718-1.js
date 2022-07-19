// https://school.programmers.co.kr/learn/courses/30/lessons/12916
// 문자열 내 p와 y의 개수

function solution(s) {
  // let arr;
  let sum = 0,
    sum2 = 0

  s.toLowerCase()
  // console.log(s)
  // console.log(s.includes('p').length);
  // return(s.includes('p').length && s.includes('y').length) ?
  // true : false;

  for (let i = 0; i < s.length; i++) {
    if (s.includes("p")) sum += i
    else if (s.includes("s")) sum2 += i
  }

  return sum === sum2 ? false : true
}

// solution("pPoooyY");

// 멘토님 코드
function solution(s) {
  let p = 0,
    y = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") p++
    else if (s[i] === "y" || s[i] === "Y") y++
  }
  // console.log(p,y)
  return p === y ? true : false
}

//
function solution(s) {
  const obj = { p: 0, y: 0 }
  s = s.toLowerCase()
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined) continue
    if (s[i] === "p") {
      obj[s[i]]++
    } else if (s[i] === "y") {
      obj[s[i]]++
    }
  }
  return obj.p === obj.y
}

// 정답코드
function solution(s) {
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
}
