// 핸드폰 번호 가리기

function solution(phone_number) {
  let answer = '';
  
  //phone_number[-1][-2][-3][-4]만 출력 
  for(let i=0; i<phone_number.length; i++){
   // console.log(phone_number[i]) 
      if(i>=phone_number.length-4)
          console.log(phone_number[i])
      else 
          console.log('*')
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