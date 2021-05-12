let _1の位 = 0
let _10の位 = 0
let _100の位 = 0
let _1000の位 = 0
let _10000の位 = 0
let count = 0
function カウント表示 () {
    LED表示(_1の位, 0)
    LED表示(_10の位, 1)
    LED表示(_100の位, 2)
    LED表示(_1000の位, 3)
    LED表示(_10000の位, 4)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    count = 0
})
input.onGesture(Gesture.Shake, function () {
    count += 1
    _1の位 = count % 10
    _10の位 = Math.trunc(count / 10) % 10
    _100の位 = Math.trunc(count / 100) % 10
    _1000の位 = Math.trunc(count / 1000) % 10
    _10000の位 = Math.trunc(count / 10000) % 10
    カウント表示()
})
function LED表示 (数値: number, 数値2: number) {
    if (数値 >= 0 && 数値 <= 5) {
        for (let index = 0; index <= 4; index++) {
            led.unplot(index, 数値2)
        }
        for (let index = 0; index <= 数値 - 1; index++) {
            led.plot(index, 数値2)
        }
    } else {
        for (let index = 0; index <= 4; index++) {
            led.plot(index, 数値2)
        }
        for (let index = 0; index <= 数値 - 6; index++) {
            led.unplot(index, 数値2)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(count)
    カウント表示()
})
