// 핸드폰 번호 가리기

function solution(phone_number) {
  let answer = '';
  
  //phone_number[-1][-2][-3][-4]만 출력 
  for(let i=0; i<phone_number.length; i++){
   // console.log(phone_number[i]) 
      if(i>=phone_number.length-4)
          answer = console.log(phone_number[i])
      else 
          answer = console.log('*')
  }
  return answer;
}

phone_number(12345678)

//멘토님 풀이
function solution(phone_number) {
  let answer = '';
  
  //phone_number[-1][-2][-3][-4]만 출력 
  for(let i=0; i<phone_number.length; i++){
   // console.log(phone_number[i]) 
      if(i<phone_number.length-4)
       answer += '*'
      else 
       answer += phone_number[i]
  }
  return answer;
}

let str = ''

// str.padStart(6, 'a') //aaaaaa 
// 뒤의 4자리는 제외하고 앞은 다 별표 
// let str = 'abcde'
//str.slice(1,4) // bc

function solution(phone_number) {
	let answer = '';
  //길이값
	answer += answer.padStart(phone_number.length-4, '*')
  // index 값
  answer +=phone_number.slice(phone_number.length-4, phone_number.length)
  console.log(answer)
}

// 다른 방법 
// let str = ''
// str.padStart(6, 'a') //aaaaaa 
// 뒤의 4자리는 제외하고 앞은 다 별표 
// let str = 'abcde'
//str.slice(1,4) // bc

function solution(phone_number) {
	let answer = '';
  //길이값
	answer += answer.padStart(phone_number.length-4, '*')
  // index 값
  answer += phone_number.slice(phone_number.length-4)
  return answer
}