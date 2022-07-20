// https://school.programmers.co.kr/learn/courses/30/lessons/12917
// 문자열 내림차순으로 배치하기

function solution(s) {
  // let arr = [];
  // let ascii_code = arr.charCodeAt(0)
  // console.log(ascii_code);

  //     let arr = [];
  //     for(let i=0; i<arr.length; i++){
  //     if(Number(arr[i]) < Number(arr[i+1]))
  //        arr[i] = arr[i+1]

  //        // console.log(arr[i])
  //         return arr;
  //     }

  return s.split("").sort().reverse().join("");
}

/* ========================== */
/* ====== 정리 ======= */
// 원본이 변경되기 때문에 주의해야 한다
const arr = [10, 9, 1, 7, 97, 102]
  
// 오름차순
arr.sort((a, b) => a - b)
  
// 내림차순
arr.sort((a, b) => b - a)
  
const strArr = ['a', 'b', 'Z', 'A', 'z', 'f']
// strArr.sort((a, b) =>)

//아스키코드 변경 가능
String.fromCharCode(97) // a 
String.fromCharCode(65) // A
// 유니코드 : 대문자는 소문자보다 앞에 있다

//문자열 오름차순 
strArr.sort((a,b) => b > a ? -1 : 1) 

//문자열 내림차순
strArr.sort((a, b) => b > a ? -1 : 1);
/* ========================== */


//멘토님 코드
function solution(s) {
  const arr = []
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i])
  }
  arr.sort((a, b) => {
    return a>b ? -1 : 1
  })
  // console.log(arr)
  let answer = '';
  for (let i = 0; i < arr.length; i++){
    answer += arr[i]
  }
  // console.log(answer)
  return answer;
}


//메서드 사용 
function solution(s) {
  const answer = s.split('').sort((a, b) => {
    return a > b ? -1 : 1
  }).join('')
  // console.log(answer)
  return answer;
}