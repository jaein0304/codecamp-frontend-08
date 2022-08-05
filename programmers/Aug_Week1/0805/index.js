// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 폰켓몬

// 세준 멘토님 코드
function solution(nums) {
  const answer = []

  for (let i = 0; i < nums.length; i++) {
    if (answer.includes(nums[i]) === false && nums.length / 2 !== answer.length) {
      answer.push(nums[i])
    }
    // console.log(answer, nums[i], nums.length/2)
  }
  return answer.length
  // console.log(answer)
}

// set 함수
function solution(nums) {
  const answer = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (nums.length / 2 !== answer.size) {
      answer.add(nums[i])
    }
    // console.log(answer, nums[i])
  }
  return answer.size

  // console.log(answer)
}
// include를 사용하지 않는 것만으로도 속도면에서 더빠른 퍼포먼스가 나온다.
// 중복데이터가 나올 시 set을 사용하면 더 빠른 결과가 도출된다.

// 메서드
function solution(nums) {
  const answer = new Set()

  nums.forEach((monster) => {
    // console.log(answer, nums.length / 2, answer.size,monster)

    if (nums.length / 2 !== answer.size) {
      answer.add(monster)
    }
  })
  return answer.size
}
