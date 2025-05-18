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
    if (bauteile == 0) {
        zeigeWurzel()
    } else if (bauteile == 1) {
        zeigeSprossachse()
    } else if (bauteile == 2) {
        zeigeBlaetter()
    } else if (bauteile == 3) {
        zeigeBluete()
    } else {
        bauteile = -1
    }
    bauteile += 1
})
function zeigeBluete () {
    basic.showNumber(bluete)
    servos.P3.setAngle(bluete)
}
input.onButtonPressed(Button.B, function () {
	
})
let bluete = 0
let blaetter = 0
let sprossachse = 0
let wurzel = 0
let bauteile = 0
let servo = 0
bauteile = 0
wurzel = 0
sprossachse = 30
blaetter = 60
bluete = 90
servos.P3.setAngle(180)
basic.forever(function () {
	
})
