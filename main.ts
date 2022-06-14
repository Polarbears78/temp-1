let t2 = 0
let t1 = 0
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
let t3 = input.temperature()
basic.forever(function () {
    t1 = DS18B20.TemperatureNumber(DS18B20.pin.pin2)
    if (Math.abs(t1 - t2) < 0.3) {
        t3 = t1
        serial.writeNumber(t3)
        serial.writeLine("")
        basic.pause(1000)
    }
    t2 = t1
})
basic.forever(function () {
    basic.showNumber(t3)
})
