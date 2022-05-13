/* async와 await 사용하여 코드 변경 */
// function loadJson(url) {
//     return fetch(url)
//         .then(response => {
//             if (response.status == 200) {
//                 return response.json();
//             } else {
//                 throw new Error(response.status);
//             }
//         })
// }

async function loadJson(url) {
    let response = await fetch(url)

    if (response.status == 200) {
        let json = await response.json();
        return json
    }
    throw new Error(response.status);
}

loadJson('no-such-user.json')
    .catch(alert);

/* async가 아닌 함수에서 async 함수 호출하기 */
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    // ...코드...
    // async wait()를 호출하고 그 결과인 10을 얻을 때까지 기다리려면 어떻게 해야 할까요?
    // f는 일반 함수이기 때문에 여기선 'await'를 사용할 수 없다는 점에 주의하세요!
    wait().then(result => alert(result))
}

f();