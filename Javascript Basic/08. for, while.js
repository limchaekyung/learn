// 반복문 loop
// 동일한 작업을 여러번 반복

// for
/* for (let i = 0; i < 10; i++) {
    // 초기값, 조건(false가 되면 멈춤), 코드 실행 후 작업
    // 반복할 코드
} */

// 1부터 10까지의 로그
/* for (let i = 0; i < 10; i++) {
    console.log(i)
}
for (let i = 1; i < 11; i++) {
    console.log(i)
}
for (let i = 1; i <= 10; i++) {
    console.log(i)
} */

// while
/* let i = 0;
while (i < 10) {
    // 코드
    i++
} */

/* let i = 0;

while (i < 10) {
    console.log(i)
    i++
} */

// do...while
/* let i = 0;
do {
    // 코드
    i++
} while (i < 10) */

// break, continue
// break : 멈추고 빠져나옴
// continue : 멈추고 다음 반복으로 진행

// break
/* while (true) {
    let answer = confirm('계속 할까요?')
    if (!answer) {
        break
    }
} */

// continue
// 짝수만
/* for (let i = 0; i < 10; i++) {
    if (i % 2) {
        continue
    }
    console.log(i)
} */
