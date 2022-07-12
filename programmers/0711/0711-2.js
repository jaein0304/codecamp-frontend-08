// https://school.programmers.co.kr/learn/courses/30/lessons/12906
// 같은 숫자는 싫어 (중복제거)

function solution(arr)
{
    let answer = [];
	for(let i=0; i<arr[i].length; i++){
      if(answer[i] === answer[i+1]) {
        	answer[i] = answer[i+1]
        }
        console.log(answer[i])
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    //console.log('Hello Javascript')
    
    return answer;
}

//멘토님 풀이
function solution(arr) {
    const answer = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== arr[i+1]) //현재 값과 내 앞의 값 비교 
            answer.push(arr[i])  
        //console.log(answer)
    }
      return answer;
}

//같지 않을 때 데이터를 넣어주고있는데, answer에 마지막 데이터랑 비교할 때
//동일한 데이터면 넣어주고 동일하지 않으면 넣어주지 않음 
function solution(arr) {
    const answer = [];
    for(let i=0; i<arr.length; i++) {
        console.log(answer,arr[i])
        if(arr[i] !== arr[i+1]) 
            answer.push(arr[i])  
        //
    }
      return answer;
}

//
function solution(arr) {
    const answer = [];
    for(let i=0; i<arr.length; i++) {
        console.log(answer,arr[i])
        if(arr[i] !== answer[answer.length-1]) //현재 값과 답의 마지막데이터 비교 
            answer.push(arr[i])  
    }
      return answer
}