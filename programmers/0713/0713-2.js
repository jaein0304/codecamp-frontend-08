// https://school.programmers.co.kr/learn/courses/30/lessons/12918
// 문자열 다루기 
function solution(s) {
  let answer = true;
    if (s.length === 4 || s.length === 6) {
      

    } return false;
}




//멘토님 코드
// NaN = Not a Number : 숫자가 아니다 
// -> 0을 0으로 나눌 때 
// -> 문자열 Number("1234")를 Number타입으로 바꾸면 1234인데,
// Number("1234a")면 NaN 

/* ---------------------------------- */
//isNaN("123a") // 문자 숫자 검증 함수 
//Number.isNaN() // 기능은 같으나, number 타입으로 변환해주는 거 숫자가 맞으면 false,nan값이면 true
//안에 있는 데이터를 그대로 받아오되 nan값 자체인지 확인..?
//ex) isNaN("123a") // true // 데이터를 Number()로 변환 후 nan값인지
//ex) Number.isNaN("123a") // false // 데이터를 그대로 받아와 nan값인지 
//Number.isNaN(Number("123a")) // 이게 더 까다롭고 엄격하게 검증
/* ---------------------------------- */

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  let answer = true;
  for (let i = 0; i < s.length; i++) {
    //console.log(isNaN(s[i]), s[i])
    if (isNaN(s[i])) answer = false;
  }
  return answer;
}


// 2
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    //console.log(isNaN(s[i]), s[i])
    if (isNaN(s[i])) return false;
  }
  return true;
}

// 메서드 사용
function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    } 
    const answer = s.split('').filter(num => {
        return isNaN(num)
    })
    // console.log(answer)
    return answer.length === 0 
}

//정답 코드
function alpha_string46(s){
 /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("a234") );