// https://school.programmers.co.kr/learn/courses/30/lessons/12903
// 가운데 글자 가져오기

function solution(s) {
    let answer = 0;
    
    for(let i=0; i<s.length; i++) {
        if(s.length-1%2===0) // 짝수
            return answer = s[s.length/2] 
        else
            return answer = s[s.length]
            
    }
  //return answer;
}


//
function solution(s) {
    for(let i=0; i<s.length; i++) {
        return (s.length%2 === 0 ? s[s.length]+s[s.length+1] : s[s.length])
  }
}

  
