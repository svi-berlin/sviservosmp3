input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(0)
    basic.pause(500)
    servos.P0.setAngle(90)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(180)
    basic.pause(500)
    servos.P0.setAngle(90)
})
servos.P0.setAngle(90)
basic.forever(function () {
	
})
