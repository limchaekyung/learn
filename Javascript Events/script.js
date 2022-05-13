const myEvent = new CustomEvent("myCustomEvent", { detail: { hello: "world" } })
const button = document.querySelector("button")

button.addEventListener("custom:doubleClick", e => {
    console.log("Double Click", e.detail.timeBetweenClicks)
})

const MAX_DOUBLE_CLICK_TIME = 500
let lastClick = 0
button.addEventListener("click", e => {
    const timeBetweenClicks = e.timeStamp - lastClick
    if (timeBetweenClicks > MAX_DOUBLE_CLICK_TIME) {
        lastClick = e.timeStamp
        return
    }
    const doubleClickEvent = new CustomEvent("custom:doubleClick", {
        bubbles: true,  /* true인 경우 이벤트 버블링 */
        cancelable: true,   /* true인 경우 event.preventDefault()가 동작 */
        composed: true,
        detail: {   /* custom events 관련 정보를 저장, 다른 이벤트 프로퍼티와 충돌을 피하기 위함 */
            timeBetweenClicks,
        },
    })
    e.target.dispatchEvent(doubleClickEvent)
    lastClick = 0
})

