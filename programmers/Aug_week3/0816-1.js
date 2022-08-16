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
