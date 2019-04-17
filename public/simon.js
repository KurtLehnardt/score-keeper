let comboMemory: BUTTONCOLOR[] = []
let userIndex: number = 0
let playbackID: number
let userTurn: boolean = false
let strictMode: boolean = false
//let onButton:boolean = true
let turnCount: number = 0
let turnsToWin: number = 20
// possibly start turn at 1;
let blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3")
let greenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3")
let redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3")
let yellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3")
let errorSound = new Audio('https://www.freesfx.co.uk/rx2/mp3s/9/11111_1393961399.mp3')
let winSound = new Audio('http://fcc-zipline-build-a-simon-game.bitballoon.com/assets/media/success.wav')

function gameStart() {
    //$(".pad").css('opacity', '0.4')
    $(".pad").css('opacity', '0.4')
    $("#turnCount").html('--')
    comboMemory = []
    turnCount = 0
    $('#turnCount').html('--')
    window.clearInterval(playbackID)
    computersTurnNewColor()
}

function computersTurnNewColor() {
    newColor()
    computersTurn()
}

function newColor() {
    let random: number = Math.floor(Math.random() * (4 - 0) + 0)
    comboMemory.push(random)
    console.log(comboMemory, 'new Color added')
}

function computersTurn() {
    userTurn = false
    userIndex = 0
    playColors()
}

function playColors() {
    let intervalTime = 1000 - (turnCount * 25)
    console.log(intervalTime, 'interval time')
    console.table('comboMemory length:', comboMemory.length, 'userIndex:', userIndex)
    playbackID = window.setInterval(playNextNumber, intervalTime)
    //https://javascript.info/settimeout-setinterval
}

function playNextNumber() {
    console.log('Is this interval?: ')
    playColor(comboMemory[userIndex])
    if (switchTurn()) {
        clearInterval(playbackID)
        userTurn = true
        //userIndex = 0
        turnCount++
    }
}
function playColor(color: BUTTONCOLOR) {
    //Consolidate verbose switch statements into this function
    //function light(){$("#" + color)..animate({opacity: 1}, 200).animate({opacity: 0.8}, 100)}
    //if (onButton){
    switch (color) {
        case BUTTONCOLOR.BLUE:
            resetSound(blueSound)
            blueSound.play()
            $("#blue").animate({ opacity: 1 }, 100).animate({ opacity: .4 }, 50)
            break
        case BUTTONCOLOR.GREEN:
            resetSound(greenSound)
            greenSound.play()
            $("#green").animate({ opacity: 1 }, 100).animate({ opacity: .4 }, 50)
            break
        case BUTTONCOLOR.RED:
            resetSound(redSound)
            redSound.play()
            $("#red").animate({ opacity: 1 }, 100).animate({ opacity: .4 }, 50)
            break
        case BUTTONCOLOR.YELLOW:
            resetSound(yellowSound)
            yellowSound.play()
            $("#yellow").animate({ opacity: 1 }, 100).animate({ opacity: .4 }, 50)
            break
        default:
            alert('error in playColor switch')
    }
    //  }
    console.log(BUTTONCOLOR[color])
}
function switchTurn() {
    return userIndex >= comboMemory.length
}



function setDifficulty(value) {
    if (value == 3) {
        turnsToWin = 50
        $('#turnCount').html('Hard: 50')
        console.log(value, turnsToWin)
    } else if (value == 1) {
        turnsToWin = 5
        $('#turnCount').html('Easy: 5')
        console.log(value, turnsToWin)
    }
    else if (value == 2) {
        turnsToWin = 20
        $('#turnCount').html('Reg: 20')
        console.log(value, turnsToWin)
    }
}

function gameStop() {
    clearInterval(playbackID)
    comboMemory = []
    userIndex = 0
    userTurn = false
}

function resetSound(color) {
    color.currentTime = 0
}





function getCombo() {
    return comboMemory
}








function pressColor(color: BUTTONCOLOR) {
    //   if (onButton){
    switch (color) {
        case BUTTONCOLOR.BLUE:
            resetSound(blueSound)
            blueSound.play()
            $("#blue").animate({ opacity: 1 }, 100).animate({ opacity: .4 }, 50)
            break
        case BUTTONCOLOR.GREEN:
            resetSound(greenSound)
            greenSound.play()
            $("#green").animate({ opacity: 1 }, 100).animate({ opacity: .4 }, 50)
            break
        case BUTTONCOLOR.RED:
            resetSound(redSound)
            redSound.play()
            $("#red").animate({ opacity: 1 }, 100).animate({ opacity: .4 }, 50)
            break
        case BUTTONCOLOR.YELLOW:
            resetSound(yellowSound)
            yellowSound.play()
            $("#yellow").animate({ opacity: 1 }, 100).animate({ opacity: .4 }, 50)
            break
        default:
            alert('error in pressColor switch')
    }
}
if (userTurn) {
    if (color == comboMemory[userIndex]) {
        userIndex++
        checkIfTurn()
    } else {
        loseGame()
    }
    // }
}


function checkIfWin() {
    if (userIndex == difficultyLevel) {
        $('#turnCount').html('Winner')
        winSound.play()
        gameStop()
        return true
    } else {
        return false
    }
}

function checkIfTurn() {
    if (switchTurn()) {
        if (!checkIfWin()) {
            console.log("your turn is over")
            $('#turnCount').html(userIndex)
            computersTurnNewColor()
        }
    }
}

function toggleStrict() {
    if (strictMode == false) {
        $("#strictMode").css('background', 'radial-gradient(#AAA, blue)')
        strictMode = true
    } else {
        $("#strictMode").css('background', 'radial-gradient(blue, black)')
        strictMode = false
    }
}

function toggleOnOff() {
    // if (onButton == false){
    //   onButton = true
    //   $("#onOff").css('background', 'radial-gradient(#FF3, #AA0)')
    //   $(".pad").css('opacity', '0.4')
    //   $("#turnCount").html('--')
    // } else {
    //   onButton = false;
    //   gameStop()
    //   $("#onOff").css('background', 'radial-gradient(#550, #220)')
    //   $(".pad").css('opacity', '0.1')
    //   $("#turnCount").html(' ')
    // }
}

function loseGame() {
    errorSound.play()
    if (strictMode) {
        console.log('Game Over You Lose')
        $('#turnCount').html('restart')
    } else {
        console.log('retry')
        computersTurn()
    }
}

enum BUTTONCOLOR {
    BLUE,
    GREEN,
    RED,
    YELLOW
}

