input.onButtonPressed(Button.A, function () {
    rekabit.runMotor(MotorChannel.All, MotorDirection.Forward, 255)
})
input.onButtonPressed(Button.B, function () {
    rekabit.brakeMotor(MotorChannel.All)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    # . . . #
    . # # # .
    `)
