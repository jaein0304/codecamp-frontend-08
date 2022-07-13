// https://school.programmers.co.kr/learn/courses/30/lessons/12919
// 서울에서 김서방 찾기
function solution(seoul) {
    let answer = '';
  
    for(let i=0; i<seoul.length; i++) //포문을 배열의 길이까지도는데,
          if(seoul.includes("Kim"))  //kim이 포함되어 있다면
              return answer = seoul[i].length //함수를 반환해야함 
  
 
	answer = console.log(`김서방은 ${answer}에 있다`)
    return answer;
}


//멘토님 코드
function solution(seoul) {
    let x = 0 // 김서방의 위치(인덱스) 값 저장
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === 'Kim')
            x = i
    }
    return `김서방은 ${x}에 있다`
}

//코드 다듬기
function solution(seoul) {
  let x = 0; 
  for (let i = 0; i < seoul.length; i++) {
      if (seoul[i] === "Kim")
          x = i;
      break; // 찾고나서 break 걸면 반복문 중단시킴 
  }
  return `김서방은 ${x}에 있다`;
}

//코드 다듬기2
function solution(seoul) {

  for (let i = 0; i < seoul.length; i++) {
      if (seoul[i] === "Kim")
        return `김서방은 ${i}에 있다`;
  }
}

//메서드로 풀기
function solution(seoul) {
  const x = seoul.indexOf("Kim");
  return `김서방은 ${x}에 있다`;
}

