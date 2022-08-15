// https://school.programmers.co.kr/learn/courses/30/lessons/42889
// 실패율

function solution(N, stages) {
  // N : 전체 스테이지 개수
  // stage : 현재 멈춰있는 스테이지 번호
  // 스테이지왔으나 클리어 x / 스테이지 도달
  //  실패율이 높은 스테이지부터 내림차순(desc)으로 스테이지의 번호가 담겨있는 배열을 return
  let result = []
  for (let i = 1; i < N + 1; i++) {
    // 만약 스테이지랑 i랑 같으면
    let tmp = stages.filter((n) => n === i).length
    console.log(tmp)
    // 새 배열에 넣어준다
    result.push([i, tmp / stages.length])
    // 실패한사람 뺴고
    stages.length -= tmp
  }
  // desc
  result = result.sort((a, b) => b[1] - a[1])
  return result.map((a) => a[0])
}
