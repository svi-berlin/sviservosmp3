function spieleIntro () {
    serialmp3.playMp3Track(1, 1)
}
input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(0)
    basic.pause(500)
    servos.P0.setAngle(90)
})
function stelleFrage (num: number) {
    serialmp3.playMp3Track(num, 2)
}
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(180)
    basic.pause(500)
    servos.P0.setAngle(90)
})
let quiznummer = 1
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
spieleIntro()
servos.P0.setAngle(90)
stelleFrage(quiznummer)
basic.forever(function () {
	
})
