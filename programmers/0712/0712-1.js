//https://school.programmers.co.kr/learn/courses/30/lessons/12937
//짝수와 홀수
function solution(num) {
    let answer = '';
    
    if(num%2==0)
        console.log("Even") //출력 콘솔 x
    else
        console.log("Odd")
    
    return answer;
}


// 실수한 것 
function solution(num) {
    let answer = '';
    
    if(num%2==0)
    return answer( "Even") // = 괄호 x 
    else
    return answer( "Odd") 
    
    return answer;
}

//정답 
function solution(num) {
    let answer = '';
    
    if(num%2==0) //얘도 === 
        return answer= "Even"
    else
       return answer = "Odd"
}


//정답2
function solution(num) {
    return (num % 2 === 0? "Even":"Odd") //자스는 === 쓰기 
}