function zeigeBlaetter () {
    basic.showNumber(blaetter)
    servos.P3.setAngle(blaetter)
}
function zeigeSprossachse () {
    basic.showNumber(sprossachse)
    servos.P3.setAngle(sprossachse)
}
function zeigeWurzel () {
    basic.showNumber(wurzel)
    servos.P3.setAngle(wurzel)
}
input.onButtonPressed(Button.A, function () {
    bauteile += 1
    if (bauteile == 1) {
        zeigeWurzel()
    } else if (bauteile == 2) {
        zeigeSprossachse()
    } else if (bauteile == 3) {
        zeigeBlaetter()
    } else if (bauteile == 4) {
        zeigeBluete()
    } else {
        zumStart()
    }
})
function zumStart () {
    servo = 0
    bauteile = 0
    servos.P3.setAngle(180)
}
function zeigeBluete () {
    basic.showNumber(bluete)
    servos.P3.setAngle(bluete)
}
input.onButtonPressed(Button.B, function () {
	
})
let servo = 0
let bauteile = 0
let bluete = 0
let blaetter = 0
let sprossachse = 0
let wurzel = 0
wurzel = 0
sprossachse = 30
blaetter = 60
bluete = 90
zumStart()
basic.forever(function () {
	
})
