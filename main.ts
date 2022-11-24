
let number = 0
whaleysans.showNumber(0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)){
        number -= 1
        whaleysans.showNumber(number)
        basic.pause(200)
    }
    if (input.buttonIsPressed(Button.B)){
        if (number > 9){
            number = 9
        }
        number += 1
        whaleysans.showNumber(number)
        basic.pause(200)
    }
})

