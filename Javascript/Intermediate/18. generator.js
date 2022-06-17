// generator
// 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
// next(), return(), throw()
/* function* fn() {
    try {
        console.log(1)
        yield 1
        console.log(2)
        yield 2
        console.log(3)
        console.log(4)
        yield 3
        return "finish"
    } catch (e) {
        console.log(e)
    }
}
const a = fn() */

/* 
iterable
- Symbol.iterator 메서드가 있다.
- Symbol.iterator는 iterator를 반환해야 한다.

iterator
- next 메서드를 가진다.
- next 메서드는 value와 done 속성을 가진 객체를 반환한다.
- 작업이 끝나면 done은 true가 된다.
*/
/* function* fn() {
    yield 4
    yield 5
    yield 6
}
const a = fn() */
