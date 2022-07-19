// https://school.programmers.co.kr/learn/courses/30/lessons/42748
// K번째 수 

function solution(array, commands) {
  let answer = [],
    arr = [];

  //2차원 배열 commands 매개변수 [i, j, k]
  for (let i = 0; i < commands.length; i++) {
    arr = array.slice(commands[i][0] - 1, commands[i][1]);

    arr.sort();
    answer.push(arr[commands[i][2] - 1]);
  }
  return answer;

  //     for(let i=0; i<commands.length; i++)
  //         for(let j=0; j<commands.length; j++)
  //             array.slice(commands[i][0]-1)
  //             console.log(commands.slice(i,j))

  //     function solution(array, commands) {
  //     let answer = [];

  //     for(var i=0; i<commands.length;i++){
  //         var list = array.slice(commands[i][0]-1, commands[i]
  //         							[1]).sort((a,b)=>{return a-b});

  //         answer.push(list[commands[i][2]-1]);
  //     }

  return result;
}
//

// k 번째수
// for 문
function solution(array, commands) {
    const answer = []
    for(let idx=0; idx<commands.length; idx++){
        const i = commands[idx][0]
        const j = commands[idx][1]
        const k = commands[idx][2]
        // 밑에 indx 값에서 가지고 오는거라 -1 해주는거임
        const result = array.slice(i-1, j).sort((a,b) => {
            return a-b
        }) 
        answer.push(result[k-1])
    }
    return answer
}

// 메서드
function solution(array, commands) {
    const answer = commands.map(num=>{
        // i=num[0] j=num-[1] k=num[2]
        const result = array.slice(num[0]-1, num[1]).sort((a,b) =>{
            return a-b
        })
        return result[num[2]-1]
    })
    return answer
}

    
