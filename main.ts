/**
 * Moving each `on button A pressed` block higher up will activate it.
 */
// Base task
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        led.toggle(randint(0, 4), randint(0, 4))
    }
})
// Challenge 1
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
// Challenge 3
led.setDisplayMode(DisplayMode.Greyscale)
