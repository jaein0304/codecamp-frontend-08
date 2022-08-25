// https://school.programmers.co.kr/learn/courses/30/lessons/64061
// 크레인 인형뽑기 게임
function solution(board, moves) {
  // board : 격자의 상태가 담긴 2차원 배열 (5*5<board<30*30)
  // moves : 크레인을 작동시킨 위치
  // 사라진 인형 갯수 구하기
  let a = [[]]
  // console.log(board[0][1])
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // console.log(j)
      if (board[i][0] === board[i][j]) a.push(board[i][j])
    }
  }
  console.log(a)
  // boards.filter(board
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
) // 4

// 멘토님 코드
// for문 사용
function solution(board, moves) {
  let answer = 0
  const bucket = []

  // 1. 크레인이 이동하는 위치 값을 구하는 반복문
  for (let i = 0; i < moves.length; i++) {
    // 2. 크레인이 이동해서 뽑아올 수 있는 인형의 위치값을 구하는 반복문
    for (let j = 0; j < board.length; j++) {
      // console.log(moves[i], board[j])
      const doll = board[j][moves[i] - 1]
      // 3. 인형이 있는 칸이 아니라면
      if (doll !== 0) {
        // 4. 뽑은 인형의 위치를 빈칸으로 만들어준다
        board[j][moves[i] - 1] = 0

        // console.log(bucket, doll)
        // 바구니에 넣으려고하는 인형과 바구니의 맨 위에 있는 인형이 같으면
        if (bucket[bucket.length - 1] === doll) {
          answer += 2
          bucket.pop() // 배열 마지막에 있는 데이터 제거
          //   bucket.splice(bucket.length-1 , 1)
          // slice도 가능
          break
        }
        // 5. 바구니에 인형을 담는다
        bucket.push(doll)
        break
      }
      // console.log(doll, moves[i], board[j])
    }
  }
  // console.log(bucket)
  return answer
}
