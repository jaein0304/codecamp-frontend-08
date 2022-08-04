// https://school.programmers.co.kr/learn/courses/30/lessons/12940
// 최대공약수와 최소공배수
function solution(n, m) {
  let max = (a, b) => (a % b === 0 ? b : max(b, a % b))
  let gcd = max(n, m)
  return [gcd, (n * m) / gcd]
}

// 멘토님 코드
/* 
  최대공약수 : 두 수의 공통되는 약수 중에서 제일 큰 수
  최소공배수 : 두 수의 공통되는 배수 중에서 제일 작은 수
*/

// for문
function solution(n, m) {
  // 최대공약수 구하기
  let max = 0
  for (let i = 1; i <= m; i++) {
    // console.log(i ,n%i, m%i)
    if (n % i === 0 && m % i === 0)
      // console.log(i, n%i, m%i)
      max = i
  }
  // console.log(max)

  // 최소공배수 구하기
  let min = 0
  for (let i = m; i <= m * n; i += m) {
    // console.log(i, i%n)
    if (i % n === 0) {
      min = i
      break // 제일 작을 때 break 걸어주기
    }
  }
  // console.log(min)

  return [max, min]
}

/* ================================= */
/*
      유클리드 호제법
      최대공약수를 구하기 위한 알고리즘 공식 
      a를 b로 나눴을 때 (a가 b보다 클 경우) === 큰 수를 작은수로 나눴을 때
      나머지 값이 0이 되면, 작은 수(b)가 "최대 공약수"
      나머지 값이 0이 아니면, 작은 수(b)가 큰 수(a)가 되고 
      나머지 값이 작은 수(b)가 된다. 이것을 반복했을 때 나머지 값이 0이 나온다면
      작은수 b가 "최대 공약수"
*/
/* ================================= */

function solution(n, m) {
  let a = m,
    b = n,
    r = 0 // 큰 수, 작은 수, 나머지 값

  // 답이 나올 때까지 반복해야 하므로 while문 사용
  while (a % b > 0) {
    r = a % b // 큰 수에서 작은 수를 나눈 나머지 값 저장
    a = b // 큰 수에서 작은 수를 나눈 나머지 값 저장
    b = r // 작은 수는 나머지 값을 가져온다
  }

  // 최소 공배수는 두 수를 곱한 수에 최대공약수로 나눠준 몫의 값
  console.log(b, (m * n) / b)
  return [b, (m * n) / b]
}
